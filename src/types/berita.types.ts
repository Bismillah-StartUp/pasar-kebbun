export type BeritaKategori = 'event' | 'kuliner' | 'umkm' | 'umum';

export interface Berita {
  id: string;
  judul: string;
  link: string;
  gambar: string;
  kategori: BeritaKategori;
  tanggal: Date;
}
