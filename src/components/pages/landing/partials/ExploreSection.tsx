'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ROUTES } from '@/constants/routes';

const ITEMS = [
  {
    key: 'kuliner',
    label: 'Kuliner',
    desc: 'Menu tradisional nusantara autentik setiap minggu',
    href: ROUTES.USER.KULINER,
    image: '/assets/images/landings/landing_one.png',
  },
  {
    key: 'umkm',
    label: 'UMKM',
    desc: '100+ produk lokal berkualitas dari pedagang pilihan',
    href: ROUTES.USER.UMKM,
    image: '/assets/images/landings/landing_two.png',
  },
  {
    key: 'event',
    label: 'Event',
    desc: 'Pertunjukan, workshop, dan festival budaya rutin',
    href: ROUTES.USER.EVENT,
    image: '/assets/images/landings/landing_three.png',
  },
  {
    key: 'fasilitas',
    label: 'Fasilitas',
    desc: 'Area lengkap dan nyaman untuk semua pengunjung',
    href: ROUTES.USER.FASILITAS,
    image: '/assets/images/landings/landing_four.png',
  },
];

export default function ExploreSection() {
  const [active, setActive] = useState('kuliner');

  return (
    <section className="w-full bg-surface py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase border border-gray-200 rounded-full inline-block px-3 py-1 mb-4">
          Jelajahi
        </p>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Ada Apa di Pasar Kebbun?</h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Satu tempat, ragam pengalaman
            <br />
            dari kuliner tradisional hingga produk UMKM pilihan.
          </p>
        </div>

        <div className="space-y-2">
          {ITEMS.map((item) => {
            const isActive = active === item.key;
            return (
              <div
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`flex items-center justify-between rounded-xl px-5 py-4 cursor-pointer transition-all ${
                  isActive ? 'bg-primary text-white' : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
              >
                <div className="flex-1">
                  <p className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-900'}`}>{item.label}</p>
                  <p className={`text-xs mt-0.5 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>{item.desc}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  {isActive && item.image && (
                    <div className="relative w-24 h-12 rounded-lg overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.label} fill className="object-cover" />
                    </div>
                  )}
                  <Link
                    href={item.href}
                    onClick={(e) => e.stopPropagation()}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'border-white/40 text-white hover:bg-white/10' : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
