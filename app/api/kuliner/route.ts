import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { toKuliner } from '@/lib/mappers/kuliner.mapper';
import { uploadImage, deleteImage } from '@/lib/cloudinary';
import { slugify } from '@/lib/utils';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const jenis = searchParams.get('jenis');
  const search = searchParams.get('search');
  const page = Math.max(1, Number(searchParams.get('page')) || 1);
  const perPage = Math.max(1, Number(searchParams.get('perPage')) || 7);

  const where: Prisma.CulinaryWhereInput = {
    ...(jenis === 'makanan' && { type: 'FOOD' }),
    ...(jenis === 'minuman' && { type: 'DRINK' }),
    ...(search && { name: { contains: search, mode: 'insensitive' } }),
  };

  const [items, total] = await Promise.all([
    prisma.culinary.findMany({
      where,
      include: { photos: { orderBy: { order: 'asc' } } },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * perPage,
      take: perPage,
    }),
    prisma.culinary.count({ where }),
  ]);

  return NextResponse.json({
    success: true,
    data: items.map(toKuliner),
    pagination: {
      page,
      perPage,
      total,
      totalPages: Math.max(1, Math.ceil(total / perPage)),
    },
  });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const nama = formData.get('nama');
  const jenis = formData.get('jenis');
  const penjelasan = formData.get('penjelasan');
  const hargaKoin = formData.get('hargaKoin');
  const photos = formData.getAll('photos').filter((entry): entry is File => entry instanceof File);

  if (
    typeof nama !== 'string' ||
    !nama.trim() ||
    (jenis !== 'makanan' && jenis !== 'minuman') ||
    typeof penjelasan !== 'string' ||
    !penjelasan.trim() ||
    typeof hargaKoin !== 'string' ||
    !hargaKoin ||
    photos.length === 0
  ) {
    return NextResponse.json({ success: false, message: 'Data kuliner tidak lengkap.' }, { status: 400 });
  }

  const slug = `${slugify(nama)}-${Date.now()}`;
  const uploaded = await Promise.all(photos.map((file) => uploadImage(file, 'kuliner')));

  try {
    const culinary = await prisma.culinary.create({
      data: {
        name: nama,
        slug,
        type: jenis === 'makanan' ? 'FOOD' : 'DRINK',
        description: penjelasan,
        coinPrice: Number(hargaKoin),
        photos: {
          create: uploaded.map((photo, index) => ({
            publicId: photo.publicId,
            url: photo.url,
            isPrimary: index === 0,
            order: index,
          })),
        },
      },
      include: { photos: { orderBy: { order: 'asc' } } },
    });

    return NextResponse.json({ success: true, data: toKuliner(culinary) }, { status: 201 });
  } catch (error) {
    await Promise.all(uploaded.map((photo) => deleteImage(photo.publicId)));
    throw error;
  }
}
