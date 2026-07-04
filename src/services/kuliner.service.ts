import type { Kuliner } from '@/types/kuliner.types';
import type { PaginatedResponse, ApiResponse } from '@/types/api.types';

export interface GetKulinerListParams {
  jenis?: 'makanan' | 'minuman';
  search?: string;
  page?: number;
  perPage?: number;
}

export async function getKulinerList(params: GetKulinerListParams = {}): Promise<PaginatedResponse<Kuliner>> {
  const query = new URLSearchParams();
  if (params.jenis) query.set('jenis', params.jenis);
  if (params.search) query.set('search', params.search);
  if (params.page) query.set('page', String(params.page));
  if (params.perPage) query.set('perPage', String(params.perPage));

  const res = await fetch(`/api/kuliner?${query}`);
  if (!res.ok) throw new Error('Gagal memuat data kuliner');
  return res.json();
}

export async function getKulinerByUuid(uuid: string): Promise<ApiResponse<Kuliner>> {
  const res = await fetch(`/api/kuliner/${uuid}`);
  if (!res.ok) throw new Error('Kuliner tidak ditemukan');
  return res.json();
}

export async function deleteKuliner(uuid: string): Promise<void> {
  const res = await fetch(`/api/kuliner/${uuid}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Gagal menghapus kuliner');
}

export interface CreateKulinerPayload {
  nama: string;
  jenis: 'makanan' | 'minuman';
  penjelasan: string;
  hargaKoin: number;
  photos: { file: File; isPrimary?: boolean }[];
}

export async function createKuliner(payload: CreateKulinerPayload): Promise<ApiResponse<Kuliner>> {
  const formData = new FormData();
  formData.set('nama', payload.nama);
  formData.set('jenis', payload.jenis);
  formData.set('penjelasan', payload.penjelasan);
  formData.set('hargaKoin', String(payload.hargaKoin));
  payload.photos.forEach((photo) => formData.append('photos', photo.file));

  const res = await fetch('/api/kuliner', { method: 'POST', body: formData });
  if (!res.ok) throw new Error('Gagal menambahkan kuliner');
  return res.json();
}
