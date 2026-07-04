import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { toBerita } from '@/lib/mappers/berita.mapper';
import { uploadImage, deleteImage } from '@/lib/cloudinary';
import { isImageTooLarge } from '@/lib/utils';

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

export async function PUT(request: Request, { params }: RouteParams) {
  const { uuid } = await params;

  const existing = await prisma.news.findUnique({ where: { uuid } });
  if (!existing) {
    return NextResponse.json({ success: false, message: 'Berita tidak ditemukan.' }, { status: 404 });
  }

  const formData = await request.formData();

  const judul = formData.get('judul');
  const link = formData.get('link');
  const gambar = formData.get('gambar');

  if (typeof judul !== 'string' || !judul.trim() || typeof link !== 'string' || !link.trim()) {
    return NextResponse.json({ success: false, message: 'Data berita tidak lengkap.' }, { status: 400 });
  }

  if (gambar instanceof File && isImageTooLarge(gambar)) {
    return NextResponse.json({ success: false, message: 'Ukuran gambar maksimal 5MB.' }, { status: 400 });
  }

  const newImage = gambar instanceof File ? await uploadImage(gambar, 'berita') : null;

  try {
    const news = await prisma.news.update({
      where: { uuid },
      data: {
        title: judul,
        link,
        ...(newImage && { imageUrl: newImage.url, publicId: newImage.publicId }),
      },
    });

    if (newImage) {
      await deleteImage(existing.publicId);
    }

    return NextResponse.json({ success: true, data: toBerita(news) });
  } catch (error) {
    if (newImage) await deleteImage(newImage.publicId);
    throw error;
  }
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const { uuid } = await params;

  const news = await prisma.news.findUnique({ where: { uuid } });
  if (!news) {
    return NextResponse.json({ success: false, message: 'Berita tidak ditemukan.' }, { status: 404 });
  }

  await prisma.news.delete({ where: { uuid } });
  await deleteImage(news.publicId);

  return NextResponse.json({ success: true, data: null });
}
