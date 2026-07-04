import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { toBerita } from '@/lib/mappers/berita.mapper';

interface RouteParams {
  params: Promise<{ uuid: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { uuid } = await params;

  const news = await prisma.news.findUnique({ where: { uuid } });

  if (!news) {
    return NextResponse.json({ success: false, message: 'Berita tidak ditemukan.' }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: toBerita(news) });
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const { uuid } = await params;

  const news = await prisma.news.findUnique({ where: { uuid } });
  if (!news) {
    return NextResponse.json({ success: false, message: 'Berita tidak ditemukan.' }, { status: 404 });
  }

  await prisma.news.delete({ where: { uuid } });

  return NextResponse.json({ success: true, data: null });
}
