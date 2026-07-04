import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { toBerita } from '@/lib/mappers/berita.mapper';

export async function GET() {
  const news = await prisma.news.findMany({ orderBy: { date: 'desc' } });

  return NextResponse.json({ success: true, data: news.map(toBerita) });
}
