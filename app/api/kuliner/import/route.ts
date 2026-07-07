import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { prisma } from '@/lib/prisma';
import { slugify } from '@/lib/utils';

interface ParsedRow {
  row: number;
  nama: string;
  jenis: 'makanan' | 'minuman';
  hargaKoin: number;
  penjelasan: string;
}

interface RowError {
  row: number;
  message: string;
}

function readCell(record: Record<string, unknown>, keys: string[]): unknown {
  const foundKey = Object.keys(record).find((key) => keys.includes(key.trim().toLowerCase()));
  return foundKey ? record[foundKey] : undefined;
}

function parseRows(records: Record<string, unknown>[]): { valid: ParsedRow[]; errors: RowError[] } {
  const valid: ParsedRow[] = [];
  const errors: RowError[] = [];

  records.forEach((record, index) => {
    const row = index + 2; // header is row 1
    const namaRaw = readCell(record, ['nama']);
    const jenisRaw = readCell(record, ['jenis']);
    const hargaRaw = readCell(record, ['harga', 'hargakoin']);
    const deskripsiRaw = readCell(record, ['deskripsi', 'penjelasan']);

    const nama = typeof namaRaw === 'string' ? namaRaw.trim() : String(namaRaw ?? '').trim();
    const jenisNormalized = typeof jenisRaw === 'string' ? jenisRaw.trim().toLowerCase() : '';
    const penjelasan = typeof deskripsiRaw === 'string' ? deskripsiRaw.trim() : String(deskripsiRaw ?? '').trim();
    const hargaKoin = Number(hargaRaw);

    if (!nama) {
      errors.push({ row, message: 'Nama wajib diisi.' });
      return;
    }
    if (jenisNormalized !== 'makanan' && jenisNormalized !== 'minuman') {
      errors.push({ row, message: "Jenis harus 'makanan' atau 'minuman'." });
      return;
    }
    if (!Number.isInteger(hargaKoin) || hargaKoin < 1 || hargaKoin > 4) {
      errors.push({ row, message: 'Harga koin harus berupa angka 1-4.' });
      return;
    }
    if (!penjelasan) {
      errors.push({ row, message: 'Deskripsi wajib diisi.' });
      return;
    }

    valid.push({ row, nama, jenis: jenisNormalized as 'makanan' | 'minuman', hargaKoin, penjelasan });
  });

  return { valid, errors };
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file');

  if (!(file instanceof File)) {
    return NextResponse.json({ success: false, message: 'File tidak ditemukan.' }, { status: 400 });
  }

  let workbook: XLSX.WorkBook;
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    workbook = XLSX.read(buffer, { type: 'buffer' });
  } catch {
    return NextResponse.json({ success: false, message: 'File tidak valid atau rusak.' }, { status: 400 });
  }

  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    return NextResponse.json({ success: false, message: 'File tidak memiliki sheet data.' }, { status: 400 });
  }

  const records = XLSX.utils.sheet_to_json<Record<string, unknown>>(workbook.Sheets[sheetName], { defval: '' });
  if (records.length === 0) {
    return NextResponse.json({ success: false, message: 'File tidak memiliki data.' }, { status: 400 });
  }

  const { valid, errors } = parseRows(records);

  let created = 0;
  for (const item of valid) {
    const slug = `${slugify(item.nama)}-${Date.now()}-${item.row}`;
    try {
      await prisma.culinary.create({
        data: {
          name: item.nama,
          slug,
          type: item.jenis === 'makanan' ? 'FOOD' : 'DRINK',
          description: item.penjelasan,
          coinPrice: item.hargaKoin,
        },
      });
      created += 1;
    } catch {
      errors.push({ row: item.row, message: 'Gagal menyimpan data ke database.' });
    }
  }

  return NextResponse.json(
    { success: true, data: { created, errors } },
    { status: errors.length > 0 ? 207 : 201 }
  );
}
