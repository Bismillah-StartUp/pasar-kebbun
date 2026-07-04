import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { toKuliner } from '@/lib/mappers/kuliner.mapper';

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
