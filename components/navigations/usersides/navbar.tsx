'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Kuliner', href: '/kuliner' },
    { label: 'UMKM', href: '/tenants' },
    { label: 'Event', href: '/events' },
    { label: 'Fasilitas', href: '/fasilities' },
    { label: 'Tentang Kami', href: '/about' },
  ];

  return (
    <nav className="bg-linear-to-r from-green-700 to-green-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/icons/logo-pk-green.png"
              alt="Pasar Kebun Logo"
              width={120}
              height={50}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white font-semibold hover:text-green-200 transition-colors duration-200 text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white font-semibold hover:bg-green-600 px-3 py-2 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
