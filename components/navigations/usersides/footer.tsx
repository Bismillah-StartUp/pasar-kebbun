'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const informasiLinks = [
    { label: 'Kuliner', href: '/culinaries' },
    { label: 'UMKM', href: '/tenants' },
    { label: 'Event', href: '/events' },
    { label: 'Fasilitas', href: '/fasilities' },
  ];

  const tentangKamiLinks = [
    { label: 'Visi Misi', href: '/about' },
    { label: 'Struktur Pengelola', href: '/about' },
    { label: 'Kontak Kami', href: '/about' },
    { label: 'Login Admin', href: '#' },
  ];

  const socialLinks = [
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'tiktok', href: '#', label: 'TikTok' },
    { icon: 'whatsapp', href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-linear-to-r from-green-700 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Left Section - Logo & Address */}
          <div className="flex flex-col">
            <div className="flex items-start gap-6 mb-8">
              <Link href="/" className="shrink-0">
                <Image
                  src="/assets/icons/logo-pk-white.png"
                  alt="Pasar Kebun Logo"
                  width={120}
                  height={120}
                  className="h-auto w-auto"
                />
              </Link>
              <div className="flex flex-col justify-start">
                <p className="text-sm text-gray-100 leading-relaxed">
                  Desa Saroka, Kec. Saronggi,<br />
                  Kabupaten Sumenep, Jawa Timur
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <p className="font-bold whitespace-nowrap">FOLLOW KAMI!!!</p>
              <div className="flex gap-3">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-8 h-8 text-white hover:text-pink-400 transition-colors" />
                </Link>
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-8 h-8 text-white hover:text-gray-300 transition-colors" />
                </Link>
                <Link
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-8 h-8 text-white hover:text-green-300 transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-2 gap-12">
            {/* Informasi Column */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-300">
                Informasi
              </h3>
              <ul className="space-y-3">
                {informasiLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-100 hover:text-yellow-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tentang Kami Column */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-300">
                Tentang Kami
              </h3>
              <ul className="space-y-3">
                {tentangKamiLinks.map((link, index) => (
                  <li key={`tentang-kami-${index}`}>
                    <Link
                      href={link.href}
                      className="text-gray-100 hover:text-yellow-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-100">
          <p>© 2026 PASAR KEBBUN | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
