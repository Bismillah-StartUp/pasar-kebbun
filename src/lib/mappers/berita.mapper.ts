import type { News, NewsCategory } from '@prisma/client';
import type { Berita, BeritaKategori } from '@/types/berita.types';

const CATEGORY_MAP: Record<NewsCategory, BeritaKategori> = {
  EVENT: 'event',
  CULINARY: 'kuliner',
  UMKM: 'umkm',
  GENERAL: 'umum',
};

export function toBerita(news: News): Berita {
  return {
    id: news.uuid,
    judul: news.title,
    link: news.link,
    gambar: news.imageUrl,
    kategori: CATEGORY_MAP[news.category],
    tanggal: news.date,
  };
}
