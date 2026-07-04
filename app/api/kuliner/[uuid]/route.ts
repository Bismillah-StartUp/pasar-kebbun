import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { toKuliner } from '@/lib/mappers/kuliner.mapper';

interface RouteParams {
  params: Promise<{ uuid: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { uuid } = await params;

  const culinary = await prisma.culinary.findUnique({
    where: { uuid },
    include: { photos: { orderBy: { order: 'asc' } } },
  });

  if (!culinary) {
    return NextResponse.json({ success: false, message: 'Kuliner tidak ditemukan.' }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: toKuliner(culinary) });
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const { uuid } = await params;

  const culinary = await prisma.culinary.findUnique({ where: { uuid } });
  if (!culinary) {
    return NextResponse.json({ success: false, message: 'Kuliner tidak ditemukan.' }, { status: 404 });
  }

  await prisma.culinary.delete({ where: { uuid } });

  return NextResponse.json({ success: true, data: null });
}
