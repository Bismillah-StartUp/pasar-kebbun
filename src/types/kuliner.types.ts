export type KulinerJenis = 'makanan' | 'minuman';

export interface Kuliner {
  id: string;
  nama: string;
  jenis: KulinerJenis;
  penjelasan: string;
  hargaKoin: number;
  foto: string[];
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}
