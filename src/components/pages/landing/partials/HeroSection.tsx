'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ROUTES } from '@/constants/routes';

const IMAGES = [
  { src: '/assets/images/landings/landing_one.png', alt: 'Suasana Pasar Kebbun dengan konsep tempo dulu di Saronggi, Sumenep' },
  { src: '/assets/images/landings/landing_two.png', alt: 'Area kebun dan lanskap alam Pasar Kebbun Sumenep' },
  { src: '/assets/images/landings/landing_three.png', alt: 'Pengunjung menikmati kuliner tradisional khas Madura di Pasar Kebbun' },
  { src: '/assets/images/landings/landing_four.png', alt: 'Pedagang UMKM lokal menjajakan produk di Pasar Kebbun' },
  { src: '/assets/images/landings/landing_five.png', alt: 'Transaksi non-rupiah dengan koin kepeng di Pasar Kebbun Sumenep' },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {IMAGES.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" priority={i === 0} sizes="100vw" />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 flex flex-col justify-end pb-16 px-8 md:px-16 lg:px-24 z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs font-semibold text-[12px] leading-4 tracking-[3.36px] text-white/70 uppercase mb-3">
              Pasar Rakyat Berwawasan Alam
            </p>
            <h1 className="text-4xl md:text-[75px] font-extrabold text-white leading-[70px] tracking-[-2px] max-w-2xl">
              Tradisi &amp; Alam Dalam Satu Pasar
            </h1>
          </div>
          <div className="flex flex-col gap-6 max-w-xs">
            <p className="text-[14px] leading-[22.8px] font-normal text-white/80">
              Temukan ragam kuliner tradisional, produk UMKM lokal, dan pengalaman pasar rakyat yang hidup setiap Minggu pagi.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link href={ROUTES.USER.UMKM}
                className="flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-accent/90 transition-colors">
                Jelajahi UMKM
                <span className="text-base">›</span>
              </Link>
              <Link href={ROUTES.USER.ABOUT}
                className="text-sm font-semibold text-white border border-white/60 px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors">
                Kenali Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
