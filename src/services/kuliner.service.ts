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
