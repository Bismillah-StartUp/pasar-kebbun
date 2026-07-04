export type KulinerJenis = 'makanan' | 'minuman';

export interface KulinerFoto {
  id: string;
  url: string;
  isPrimary: boolean;
}

export interface Kuliner {
  id: string;
  nama: string;
  jenis: KulinerJenis;
  penjelasan: string;
  hargaKoin: number;
  foto: KulinerFoto[];
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}
