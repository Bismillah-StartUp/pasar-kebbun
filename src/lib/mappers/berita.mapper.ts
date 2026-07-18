import type { News, NewsCategory, NewsType } from '@prisma/client';
import type { Berita, BeritaKategori, BeritaTipe } from '@/types/berita.types';

const CATEGORY_MAP: Record<NewsCategory, BeritaKategori> = {
  EVENT: 'event',
  CULINARY: 'kuliner',
  UMKM: 'umkm',
  GENERAL: 'umum',
};

const TYPE_MAP: Record<NewsType, BeritaTipe> = {
  LINK: 'link',
  MANUAL: 'manual',
};

export function toBerita(news: News): Berita {
  return {
    id: news.uuid,
    judul: news.title,
    tipe: TYPE_MAP[news.type],
    link: news.link,
    konten: news.content,
    gambar: news.imageUrl,
    kategori: CATEGORY_MAP[news.category],
    tanggal: news.date,
  };
}
