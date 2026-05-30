'use client';

import Navbar from '@/components/navigations/usersides/navbar';
import Footer from '@/components/navigations/usersides/footer';
import HeadViews from '@/components/ui/customs/headviews';
import ArticleSlides from '@/components/pages/landing/partials/article-slides';
import Link from 'next/link';
import {
  FaUtensils,
  FaUsers,
  FaStore,
} from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import { IoCalendarSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { pathImages } from '@/libs/utils';

interface Article {
  id: string;
  image: string;
  title: string;
  source: string;
  href: string;
}

const LANDING_IMAGES = [
  pathImages('landings/landing_one.png'),
  pathImages('landings/landing_two.png'),
  pathImages('landings/landing_three.png'),
  pathImages('landings/landing_four.png'),
  pathImages('landings/landing_five.png'),
];

export default function LandingPage() {
  const articles: Article[] = [
    {
      id: '1',
      image: pathImages('landings/landing_one.png'),
      title: 'Pasar Kebbun Sumenep, Wisata Nostalgia di Madura',
      source: 'detik.com',
      href: '#',
    },
    {
      id: '2',
      image: pathImages('landings/landing_two.png'),
      title: 'Pasar Kebun: Wisata Kuliner Tradisional Bernuansa Tempo Dulu',
      source: 'rri.co.id',
      href: '#',
    },
    {
      id: '3',
      image: pathImages('landings/landing_three.png'),
      title: 'Pasar Kebun Jadi Objek Wisata Unik dengan Suasana Tempo Dulu',
      source: 'portalja.com',
      href: '#',
    },
    {
      id: '4',
      image: pathImages('landings/landing_four.png'),
      title: 'Waktu yang Tepat untuk Berkunjung ke Pasar Kebun Sumenep',
      source: 'javapos.com',
      href: '#',
    },
    {
      id: '5',
      image: pathImages('landings/landing_five.png'),
      title: 'Pasar Kebun Beami Dibuka, Jadi Objek Wisata Kuliner Baru di Sumenep',
      source: 'gosumenep.com',
      href: '#',
    },
  ];

  const features = [
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
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />

      <HeadViews images={LANDING_IMAGES} />

      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-green-700 mb-2 text-center">
            PASAR KEBBUN
          </h1>
          <p className="text-xl text-yellow-500 font-semibold text-center mb-8">
            Wisata Kuliner, Budaya, dan Alam
          </p>

          <p className="text-center text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            Pasar tradisional unik mengusung konsep tempo dulu dengan nuansa tradisional yang kental menjajikan kuliner
            khas Madura, sistem transaksi tidak menggunakan uang rupiah secanggih biasa melainkan melainkan koin khusus
            yang harus diambil di loket terlebih dahulu. Pasar Kebbun juga menyajikan pengalaman budaya yang kaya dengen
            pertunjukan seni dan kesempatan menikimati keindahan alam sektor melalui aktivitas seperti menyewa perahu kecil.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="flex flex-col items-center justify-center py-6"
                >
                  <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-green-700 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-center text-gray-600 text-sm whitespace-pre-line mb-4">
                    {feature.description}
                  </p>
                  <Link href={feature.link}>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-full transition-colors duration-200 text-sm hover:cursor-pointer">
                      Lihat Disini
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ArticleSlides articles={articles} />

      <Footer />
    </main>
  );
}
