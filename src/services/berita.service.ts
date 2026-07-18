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

export interface CreateBeritaPayload {
  judul: string;
  tipe: 'link' | 'manual';
  link?: string;
  konten?: string;
  gambar: File;
}

export async function createBerita(payload: CreateBeritaPayload): Promise<ApiResponse<Berita>> {
  const formData = new FormData();
  formData.set('judul', payload.judul);
  formData.set('tipe', payload.tipe);
  if (payload.link) formData.set('link', payload.link);
  if (payload.konten) formData.set('konten', payload.konten);
  formData.set('gambar', payload.gambar);

  const res = await fetch('/api/berita', { method: 'POST', body: formData });
  if (!res.ok) throw new Error('Gagal menambahkan berita');
  return res.json();
}

export interface UpdateBeritaPayload {
  judul: string;
  tipe: 'link' | 'manual';
  link?: string;
  konten?: string;
  gambar?: File;
}

export async function updateBerita(uuid: string, payload: UpdateBeritaPayload): Promise<ApiResponse<Berita>> {
  const formData = new FormData();
  formData.set('judul', payload.judul);
  formData.set('tipe', payload.tipe);
  if (payload.link) formData.set('link', payload.link);
  if (payload.konten) formData.set('konten', payload.konten);
  if (payload.gambar) formData.set('gambar', payload.gambar);

  const res = await fetch(`/api/berita/${uuid}`, { method: 'PUT', body: formData });
  if (!res.ok) throw new Error('Gagal memperbarui berita');
  return res.json();
}
