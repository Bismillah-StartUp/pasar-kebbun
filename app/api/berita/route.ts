import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { toBerita } from '@/lib/mappers/berita.mapper';
import { uploadImage, deleteImage } from '@/lib/cloudinary';
import { isImageTooLarge } from '@/lib/utils';

export async function GET() {
  const news = await prisma.news.findMany({ orderBy: { date: 'desc' } });

  return NextResponse.json({ success: true, data: news.map(toBerita) });
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const judul = formData.get('judul');
  const link = formData.get('link');
  const gambar = formData.get('gambar');

  if (
    typeof judul !== 'string' ||
    !judul.trim() ||
    typeof link !== 'string' ||
    !link.trim() ||
    !(gambar instanceof File)
  ) {
    return NextResponse.json({ success: false, message: 'Data berita tidak lengkap.' }, { status: 400 });
  }

  if (isImageTooLarge(gambar)) {
    return NextResponse.json({ success: false, message: 'Ukuran gambar maksimal 5MB.' }, { status: 400 });
  }

  const uploaded = await uploadImage(gambar, 'berita');

  try {
    const news = await prisma.news.create({
      data: {
        title: judul,
        link,
        imageUrl: uploaded.url,
        publicId: uploaded.publicId,
        category: 'GENERAL',
      },
    });

    return NextResponse.json({ success: true, data: toBerita(news) }, { status: 201 });
  } catch (error) {
    await deleteImage(uploaded.publicId);
    throw error;
  }
}
