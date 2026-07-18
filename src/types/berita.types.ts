export type BeritaKategori = 'event' | 'kuliner' | 'umkm' | 'umum';
export type BeritaTipe = 'link' | 'manual';

export interface Berita {
  id: string;
  judul: string;
  tipe: BeritaTipe;
  link: string | null;
  konten: string | null;
  gambar: string;
  kategori: BeritaKategori;
  tanggal: Date;
}
