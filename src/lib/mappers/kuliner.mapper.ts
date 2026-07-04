import type { Culinary, CulinaryPhoto } from '@prisma/client';
import type { Kuliner } from '@/types/kuliner.types';

type CulinaryWithPhotos = Culinary & { photos: CulinaryPhoto[] };

export function toKuliner(culinary: CulinaryWithPhotos): Kuliner {
  return {
    id: culinary.uuid,
    nama: culinary.name,
    jenis: culinary.type === 'FOOD' ? 'makanan' : 'minuman',
    penjelasan: culinary.description,
    hargaKoin: culinary.coinPrice,
    foto: culinary.photos.map((photo) => ({ id: photo.uuid, url: photo.url, isPrimary: photo.isPrimary })),
    slug: culinary.slug,
    createdAt: culinary.createdAt,
    updatedAt: culinary.updatedAt,
  };
}
