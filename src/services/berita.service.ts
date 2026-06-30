import type { Berita } from '@/types/berita.types';
import type { ApiResponse } from '@/types/api.types';

export async function getBeritaList(): Promise<ApiResponse<Berita[]>> {
  const res = await fetch('/api/berita');
  if (!res.ok) throw new Error('Gagal memuat data berita');
  return res.json();
}

export async function getBeritaByUuid(uuid: string): Promise<ApiResponse<Berita>> {
  const res = await fetch(`/api/berita/${uuid}`);
  if (!res.ok) throw new Error('Berita tidak ditemukan');
  return res.json();
}

export async function deleteBerita(uuid: string): Promise<void> {
  const res = await fetch(`/api/berita/${uuid}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Gagal menghapus berita');
}
