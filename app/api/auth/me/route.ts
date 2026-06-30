import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getSession();

  if (!session) {
    return NextResponse.json(
      { success: false, message: 'Tidak terautentikasi.' },
      { status: 401 }
    );
  }

  const user = await prisma.adminUser.findUnique({
    where: { uuid: session.id },
    select: {
      uuid: true,
      fullName: true,
      username: true,
      email: true,
      avatarUrl: true,
    },
  });

  if (!user) {
    return NextResponse.json(
      { success: false, message: 'User tidak ditemukan.' },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: user });
}
