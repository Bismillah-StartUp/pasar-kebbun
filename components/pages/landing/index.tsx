'use client';

import Navbar from '@/components/navigations/usersides/navbar';
import Footer from '@/components/navigations/usersides/footer';
import HeadViews from '@/components/ui/customs/headviews';
import ArticleSlides from '@/components/pages/landing/partials/article-slides';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  UtensilsCrossed,
  ShoppingBag,
  Sparkles,
  Users,
} from 'lucide-react';

interface Article {
  id: string;
  image: string;
  title: string;
  source: string;
  href: string;
}

const LANDING_IMAGES = [
  '/assets/images/landings/landing_one.png',
  '/assets/images/landings/landing_two.png',
  '/assets/images/landings/landing_three.png',
  '/assets/images/landings/landing_four.png',
  '/assets/images/landings/landing_five.png',
];

export default function LandingPage() {
  const articles: Article[] = [
    {
      id: '1',
      image: '/assets/images/landings/landing_one.png',
      title: 'Pasar Kebbun Sumenep, Wisata Nostalgia di Madura',
      source: 'detik.com',
      href: '#',
    },
    {
      id: '2',
      image: '/assets/images/landings/landing_two.png',
      title: 'Pasar Kebun: Wisata Kuliner Tradisional Bernuansa Tempo Dulu',
      source: 'rri.co.id',
      href: '#',
    },
    {
      id: '3',
      image: '/assets/images/landings/landing_three.png',
      title: 'Pasar Kebun Jadi Objek Wisata Unik dengan Suasana Tempo Dulu',
      source: 'portalja.com',
      href: '#',
    },
    {
      id: '4',
      image: '/assets/images/landings/landing_four.png',
      title: 'Waktu yang Tepat untuk Berkunjung ke Pasar Kebun Sumenep',
      source: 'javapos.com',
      href: '#',
    },
    {
      id: '5',
      image: '/assets/images/landings/landing_five.png',
      title: 'Pasar Kebun Beami Dibuka, Jadi Objek Wisata Kuliner Baru di Sumenep',
      source: 'gosumenep.com',
      href: '#',
    },
  ];

  const features = [
    {
      id: 1,
      icon: MapPin,
      title: 'Lokasi',
      description: 'Desa Saroka, Saronggi,\nKecamatan Saronggi, Sumenep,\nJawa Timur',
      link: '#',
    },
    {
      id: 2,
      icon: Clock,
      title: 'Jam Operasional',
      description: 'Setiap Hari\n08:00-14:00 Wis\n17:00-23:00 Wis',
      link: '#',
    },
    {
      id: 3,
      icon: UtensilsCrossed,
      title: 'Kuliner',
      description: '80+ Produk Makanan dan\nMinuman Tradisional',
      link: '#',
    },
    {
      id: 4,
      icon: ShoppingBag,
      title: 'UMKM',
      description: '15+ UMKM Asli Madura',
      link: '#',
    },
    {
      id: 5,
      icon: Sparkles,
      title: 'Event',
      description: '48+ Event Penyelenggaraan\ndalam Setahun',
      link: '#',
    },
    {
      id: 6,
      icon: Users,
      title: 'Pengunjung',
      description: '200-500 Pengunjung/\nOperasional',
      link: '#',
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - HeadViews */}
      <HeadViews images={LANDING_IMAGES} />

      {/* About Section */}
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

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Link
                  key={feature.id}
                  href={feature.link}
                  className="group flex flex-col items-center justify-center p-8 bg-linear-to-br from-green-600 to-green-700 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-center text-gray-100 text-sm whitespace-pre-line mb-4">
                    {feature.description}
                  </p>
                  <button className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-full transition-colors duration-200 text-sm">
                    Lihat Disini
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article Slides Section */}
      <ArticleSlides articles={articles} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
