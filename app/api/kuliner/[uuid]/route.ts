import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { toKuliner } from '@/lib/mappers/kuliner.mapper';
import { uploadImage, deleteImage } from '@/lib/cloudinary';

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

type PhotoOrderEntry = { type: 'existing'; photoId: string } | { type: 'new' };

export async function PUT(request: Request, { params }: RouteParams) {
  const { uuid } = await params;

  const existing = await prisma.culinary.findUnique({
    where: { uuid },
    include: { photos: true },
  });
  if (!existing) {
    return NextResponse.json({ success: false, message: 'Kuliner tidak ditemukan.' }, { status: 404 });
  }

  const formData = await request.formData();

  const nama = formData.get('nama');
  const jenis = formData.get('jenis');
  const penjelasan = formData.get('penjelasan');
  const hargaKoin = formData.get('hargaKoin');
  const photoOrderRaw = formData.get('photoOrder');
  const newFiles = formData.getAll('photos').filter((entry): entry is File => entry instanceof File);

  if (
    typeof nama !== 'string' ||
    !nama.trim() ||
    (jenis !== 'makanan' && jenis !== 'minuman') ||
    typeof penjelasan !== 'string' ||
    !penjelasan.trim() ||
    typeof hargaKoin !== 'string' ||
    !hargaKoin ||
    typeof photoOrderRaw !== 'string'
  ) {
    return NextResponse.json({ success: false, message: 'Data kuliner tidak lengkap.' }, { status: 400 });
  }

  let photoOrder: PhotoOrderEntry[];
  try {
    photoOrder = JSON.parse(photoOrderRaw);
  } catch {
    return NextResponse.json({ success: false, message: 'Urutan foto tidak valid.' }, { status: 400 });
  }

  if (photoOrder.length === 0) {
    return NextResponse.json({ success: false, message: 'Minimal harus ada satu foto.' }, { status: 400 });
  }

  const keptPhotoIds = new Set(
    photoOrder.filter((entry): entry is { type: 'existing'; photoId: string } => entry.type === 'existing').map((entry) => entry.photoId)
  );
  const removedPhotos = existing.photos.filter((photo) => !keptPhotoIds.has(photo.uuid));

  const uploaded = await Promise.all(newFiles.map((file) => uploadImage(file, 'kuliner')));

  try {
    let uploadIndex = 0;
    const photoWrites = photoOrder.map((entry, order) => {
      if (entry.type === 'existing') {
        return prisma.culinaryPhoto.update({
          where: { uuid: entry.photoId },
          data: { isPrimary: order === 0, order },
        });
      }
      const photo = uploaded[uploadIndex++];
      return prisma.culinaryPhoto.create({
        data: {
          culinaryId: existing.id,
          publicId: photo.publicId,
          url: photo.url,
          isPrimary: order === 0,
          order,
        },
      });
    });

    await prisma.$transaction([
      prisma.culinary.update({
        where: { uuid },
        data: {
          name: nama,
          type: jenis === 'makanan' ? 'FOOD' : 'DRINK',
          description: penjelasan,
          coinPrice: Number(hargaKoin),
        },
      }),
      ...(removedPhotos.length > 0
        ? [prisma.culinaryPhoto.deleteMany({ where: { uuid: { in: removedPhotos.map((photo) => photo.uuid) } } })]
        : []),
      ...photoWrites,
    ]);

    if (removedPhotos.length > 0) {
      await Promise.all(removedPhotos.map((photo) => deleteImage(photo.publicId)));
    }

    const culinary = await prisma.culinary.findUniqueOrThrow({
      where: { uuid },
      include: { photos: { orderBy: { order: 'asc' } } },
    });

    return NextResponse.json({ success: true, data: toKuliner(culinary) });
  } catch (error) {
    await Promise.all(uploaded.map((photo) => deleteImage(photo.publicId)));
    throw error;
  }
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const { uuid } = await params;

  const culinary = await prisma.culinary.findUnique({ where: { uuid }, include: { photos: true } });
  if (!culinary) {
    return NextResponse.json({ success: false, message: 'Kuliner tidak ditemukan.' }, { status: 404 });
  }

  await prisma.culinary.delete({ where: { uuid } });
  await Promise.all(culinary.photos.map((photo) => deleteImage(photo.publicId)));

  return NextResponse.json({ success: true, data: null });
}
