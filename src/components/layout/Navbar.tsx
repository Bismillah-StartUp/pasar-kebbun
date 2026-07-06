'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

const NAV_ITEMS = [
  { label: 'Beranda', href: ROUTES.USER.HOME },
  { label: 'Tentang Kami', href: ROUTES.USER.ABOUT },
  { label: 'Kuliner', href: ROUTES.USER.KULINER },
  { label: 'Berita', href: ROUTES.USER.BERITA },
  { label: 'UMKM', href: ROUTES.USER.UMKM },
  { label: 'Event', href: ROUTES.USER.EVENT },
  { label: 'Fasilitas', href: ROUTES.USER.FASILITAS },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === ROUTES.USER.HOME ? pathname === href : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={ROUTES.USER.HOME} className="shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/assets/icons/logo-pk-white.png"
                alt="Pasar Kebbun"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium text-white pb-1 transition-colors hover:text-white/80 ${
                  isActive(item.href) ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium text-white px-3 py-2 rounded-md transition-colors ${
                  isActive(item.href) ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
