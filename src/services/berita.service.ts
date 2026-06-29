import type { Berita } from '@/types/berita.types';
import type { ApiResponse } from '@/types/api.types';

const MOCK_BERITA: Berita[] = [
  { id: '1', judul: 'UMKM Lokal Pasar Kebbun Tembus Pasar Nasional', link: 'https://example.com/berita/umkm-lokal', gambar: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', kategori: 'umkm', tanggal: new Date('2026-05-12') },
  { id: '2', judul: 'Event Kuliner Madura Meriahkan Akhir Pekan', link: 'https://example.com/berita/event-kuliner', gambar: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', kategori: 'event', tanggal: new Date('2026-05-12') },
  { id: '3', judul: 'Pasar Kebbun Hadirkan Menu Baru', link: 'https://example.com/berita/menu-baru', gambar: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', kategori: 'kuliner', tanggal: new Date('2026-05-12') },
  { id: '4', judul: 'Kunjungan Wisatawan Meningkat di Pasar Kebbun', link: 'https://example.com/berita/wisatawan', gambar: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', kategori: 'umum', tanggal: new Date('2026-05-12') },
];

export async function getBeritaList(): Promise<ApiResponse<Berita[]>> {
  return { success: true, data: MOCK_BERITA };
}

export async function getBeritaByUuid(uuid: string): Promise<Berita | null> {
  return MOCK_BERITA.find((item) => item.id === uuid) ?? null;
}

export async function deleteBerita(uuid: string): Promise<void> {
  // TODO: panggil API delete setelah backend tersedia
  console.log('Hapus berita:', uuid);
}
