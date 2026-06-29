import type { Kuliner } from '@/types/kuliner.types';
import type { PaginatedResponse } from '@/types/api.types';

const MOCK_KULINER: Kuliner[] = [
  { id: '1', nama: 'Tajin Sobih', jenis: 'makanan', penjelasan: 'Bubur manis tradisional khas Madura, yang unik karena menyajikan beragam bubur (putih, cokelat, mutiara) dan cenil kenyal, disiram santan gurih dan saus gula merah, dibungkus daun pisang.', hargaKoin: 10, foto: ['https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500'], slug: 'tajin-sobih', createdAt: new Date('2026-05-01'), updatedAt: new Date('2026-05-01') },
  { id: '2', nama: "Pattola Kowa'", jenis: 'makanan', penjelasan: 'Jajanan tradisional khas Sumenep, Madura, terbuat dari gula dan telur tanpa terigu. Memiliki tekstur lembut dengan aroma alami telur yang kuat, disajikan dengan cara dikukus maupun digoreng.', hargaKoin: 12, foto: ['https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500'], slug: 'pattola-kowa', createdAt: new Date('2026-05-02'), updatedAt: new Date('2026-05-02') },
  { id: '3', nama: 'Kettan', jenis: 'makanan', penjelasan: 'Kettan Madura dimasak dengan tambahan gula cair sehingga berwarna kekuningan. Memiliki rasa lezat dengan kelezatan seperti puding, gurih di lidah, serta tekstur lembut dan aroma harum yang khas.', hargaKoin: 8, foto: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'], slug: 'kettan', createdAt: new Date('2026-05-03'), updatedAt: new Date('2026-05-03') },
  { id: '4', nama: 'Otak-Otak', jenis: 'makanan', penjelasan: 'Varian otak-otak bandeng yang renyah di luar dengan inti lembut dan gurih. Terbuat dari daging ikan dicampur rempah dan kelapa parut, dikemas dalam daun pisang dan dipanggang.', hargaKoin: 6, foto: ['https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500'], slug: 'otak-otak', createdAt: new Date('2026-05-04'), updatedAt: new Date('2026-05-04') },
  { id: '5', nama: 'Olet', jenis: 'makanan', penjelasan: 'Kudapan tradisional khas Sumenep, Madura, berwarna seperti kue cokelat. Dibuat dari tepung ketan, santan, gula merah, dan telur ayam yang digoreng hingga kecokelatan dengan tekstur lembut.', hargaKoin: 7, foto: ['https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500'], slug: 'olet', createdAt: new Date('2026-05-05'), updatedAt: new Date('2026-05-05') },
  { id: '6', nama: 'Getas', jenis: 'makanan', penjelasan: 'Kue tradisional populer di Madura berbentuk potongan kecil berwarna kuning keemasan. Kandungan telur yang tinggi menghasilkan tekstur lembut sekaligus padat dengan rasa manis tradisional.', hargaKoin: 9, foto: ['https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500'], slug: 'getas', createdAt: new Date('2026-05-06'), updatedAt: new Date('2026-05-06') },
  { id: '7', nama: 'Gheddeng Ghoreng', jenis: 'makanan', penjelasan: 'Pisang yang diolah dengan cara digoreng tradisional menggunakan minyak kelapa dan rempah khas Madura, menghasilkan tekstur kering dan renyah maksimal di setiap gigitan.', hargaKoin: 8, foto: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'], slug: 'gheddeng-ghoreng', createdAt: new Date('2026-05-07'), updatedAt: new Date('2026-05-07') },
  { id: '8', nama: 'Ondeh Ondeh', jenis: 'makanan', penjelasan: 'Makanan tradisional dengan cita rasa gurih manis berisi gula merah cair. Tekstur luar tepung ketan berlapis kelapa parut hijau yang renyah, dengan bagian dalam lembut dan manis.', hargaKoin: 6, foto: ['https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500'], slug: 'ondeh-ondeh', createdAt: new Date('2026-05-08'), updatedAt: new Date('2026-05-08') },
  { id: '9', nama: 'Lopes', jenis: 'makanan', penjelasan: 'Makanan tradisional populer di Sumenep dengan tekstur kenyal. Dibuat dari tepung tapioka berbentuk lempengan, ditambah santan kental dan penyedap khas Madura yang memberikan rasa gurih legit.', hargaKoin: 7, foto: ['https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500'], slug: 'lopes', createdAt: new Date('2026-05-09'), updatedAt: new Date('2026-05-09') },
  { id: '10', nama: 'Es Kelapa Muda Madura', jenis: 'minuman', penjelasan: 'Minuman segar dari kelapa muda asli dengan campuran sirup gula merah dan susu, disajikan dingin sebagai pelepas dahaga khas Pasar Kebbun.', hargaKoin: 5, foto: ['https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500'], slug: 'es-kelapa-muda-madura', createdAt: new Date('2026-05-10'), updatedAt: new Date('2026-05-10') },
];

export interface GetKulinerListParams {
  jenis?: 'makanan' | 'minuman';
  search?: string;
  page?: number;
  perPage?: number;
}

export async function getKulinerList({
  jenis,
  search = '',
  page = 1,
  perPage = 7,
}: GetKulinerListParams = {}): Promise<PaginatedResponse<Kuliner>> {
  let filtered = MOCK_KULINER;

  if (jenis) {
    filtered = filtered.filter((item) => item.jenis === jenis);
  }

  if (search.trim()) {
    const query = search.trim().toLowerCase();
    filtered = filtered.filter((item) => item.nama.toLowerCase().includes(query));
  }

  const total = filtered.length;
  const totalPages = Math.max(Math.ceil(total / perPage), 1);
  const start = (page - 1) * perPage;
  const data = filtered.slice(start, start + perPage);

  return {
    success: true,
    data,
    pagination: { page, perPage, total, totalPages },
  };
}

export async function getKulinerByUuid(uuid: string): Promise<Kuliner | null> {
  return MOCK_KULINER.find((item) => item.id === uuid) ?? null;
}

export async function getKulinerBySlug(slug: string): Promise<Kuliner | null> {
  return MOCK_KULINER.find((item) => item.slug === slug) ?? null;
}

export async function getAllKuliner(): Promise<Kuliner[]> {
  return MOCK_KULINER;
}
