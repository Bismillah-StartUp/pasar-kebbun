import { NextResponse } from 'next/server';
import { uploadImage } from '@/lib/cloudinary';
import { isImageTooLarge } from '@/lib/utils';

export async function POST(request: Request) {
  const formData = await request.formData();
  const gambar = formData.get('gambar');

  if (!(gambar instanceof File)) {
    return NextResponse.json({ success: false, message: 'Gambar tidak ditemukan.' }, { status: 400 });
  }

  if (isImageTooLarge(gambar)) {
    return NextResponse.json({ success: false, message: 'Ukuran gambar maksimal 5MB.' }, { status: 400 });
  }

  const uploaded = await uploadImage(gambar, 'berita-konten');

  return NextResponse.json({ success: true, data: { url: uploaded.url } }, { status: 201 });
}
