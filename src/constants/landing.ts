import { FaUtensils, FaUsers, FaStore, FaLocationDot } from 'react-icons/fa6';
import { BsClock } from 'react-icons/bs';
import { IoCalendarSharp } from 'react-icons/io5';
import { pathImages } from '@/lib/utils';

export interface LandingArticle {
  id: string;
  image: string;
  title: string;
  source: string;
  href: string;
}

export const LANDING_IMAGES = [
  pathImages('landings/landing_one.webp'),
  pathImages('landings/landing_two.webp'),
  pathImages('landings/landing_three.webp'),
  pathImages('landings/landing_four.webp'),
  pathImages('landings/landing_five.webp'),
];

export const LANDING_ARTICLES: LandingArticle[] = [
  {
    id: '1',
    image: pathImages('landings/landing_one.webp'),
    title: 'Pasar Kebbun Sumenep, Wisata Nostalgia di Madura',
    source: 'detik.com',
    href: '#',
  },
  {
    id: '2',
    image: pathImages('landings/landing_two.webp'),
    title: 'Pasar Kebun: Wisata Kuliner Tradisional Bernuansa Tempo Dulu',
    source: 'rri.co.id',
    href: '#',
  },
  {
    id: '3',
    image: pathImages('landings/landing_three.webp'),
    title: 'Pasar Kebun Jadi Objek Wisata Unik dengan Suasana Tempo Dulu',
    source: 'portalja.com',
    href: '#',
  },
  {
    id: '4',
    image: pathImages('landings/landing_four.webp'),
    title: 'Waktu yang Tepat untuk Berkunjung ke Pasar Kebun Sumenep',
    source: 'javapos.com',
    href: '#',
  },
  {
    id: '5',
    image: pathImages('landings/landing_five.webp'),
    title: 'Pasar Kebun Beami Dibuka, Jadi Objek Wisata Kuliner Baru di Sumenep',
    source: 'gosumenep.com',
    href: '#',
  },
];

export const LANDING_FEATURES = [
  {
    id: 1,
    icon: FaLocationDot,
    title: 'Lokasi',
    description: 'Desa Saroka, Saronggi,\nKecamatan Saronggi, Sumenep,\nJawa Timur',
    link: '#',
  },
  {
    id: 2,
    icon: BsClock,
    title: 'Jam Operasional',
    description: 'Setiap Hari\n08:00-14:00 Wis\n17:00-23:00 Wis',
    link: '#',
  },
  {
    id: 3,
    icon: FaUtensils,
    title: 'Kuliner',
    description: '80+ Produk Makanan dan\nMinuman Tradisional',
    link: '#',
  },
  {
    id: 4,
    icon: FaStore,
    title: 'UMKM',
    description: '15+ UMKM Asli Madura',
    link: '#',
  },
  {
    id: 5,
    icon: IoCalendarSharp,
    title: 'Event',
    description: '48+ Event Penyelenggaraan\ndalam Setahun',
    link: '#',
  },
  {
    id: 6,
    icon: FaUsers,
    title: 'Pengunjung',
    description: '200-500 Pengunjung/\nOperasional',
    link: '#',
  },
] as const;
