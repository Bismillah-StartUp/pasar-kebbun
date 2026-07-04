import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function startOfMonth(monthsAgo: number): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() - monthsAgo, 1);
}

export async function GET() {
  const now = new Date();
  const startOfThisMonth = startOfMonth(0);
  const startOfYear = new Date(now.getFullYear(), 0, 1);

  const [
    totalKuliner,
    totalThisMonth,
    makananCount,
    minumanCount,
    makananThisMonth,
    minumanThisMonth,
    countBeforeThisYear,
    culinariesThisYear,
  ] = await Promise.all([
    prisma.culinary.count(),
    prisma.culinary.count({ where: { createdAt: { gte: startOfThisMonth } } }),
    prisma.culinary.count({ where: { type: 'FOOD' } }),
    prisma.culinary.count({ where: { type: 'DRINK' } }),
    prisma.culinary.count({ where: { type: 'FOOD', createdAt: { gte: startOfThisMonth } } }),
    prisma.culinary.count({ where: { type: 'DRINK', createdAt: { gte: startOfThisMonth } } }),
    prisma.culinary.count({ where: { createdAt: { lt: startOfYear } } }),
    prisma.culinary.findMany({
      where: { createdAt: { gte: startOfYear } },
      select: { createdAt: true },
    }),
  ]);

  const monthlyAdditions = Array(12).fill(0) as number[];
  for (const { createdAt } of culinariesThisYear) {
    monthlyAdditions[createdAt.getMonth()] += 1;
  }
  monthlyAdditions[0] += countBeforeThisYear;
  for (let i = 1; i < monthlyAdditions.length; i++) {
    monthlyAdditions[i] += monthlyAdditions[i - 1];
  }

  const totalKulinerGrowth = totalThisMonth;
  const jenisGrowth = makananThisMonth + minumanThisMonth;

  return NextResponse.json({
    success: true,
    data: {
      totalKuliner,
      totalKulinerGrowth,
      makananCount,
      minumanCount,
      jenisGrowth,
      monthlyAdditions,
    },
  });
}
