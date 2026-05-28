'use client';

import Image from 'next/image';
import Link from 'next/link';

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Address */}
          <div className="md:col-span-1 flex flex-col items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/assets/icons/logo-pk-white.png"
                alt="Pasar Kebun Logo"
                width={100}
                height={100}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-sm text-gray-100">
              Desa Saroka, Kec. Saronggi,<br />
              Kabupaten Sumenep, Jawa Timur
            </p>

            {/* Social Media */}
            <div className="mt-6">
              <p className="font-bold mb-3">FOLLOW KAMI!!!</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.88z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.68v12.7a2.85 2.85 0 11-5.45-2.36c.03-.52.23-1.01.56-1.42V9.7a6.5 6.5 0 107.92 6.32v-3.2a8.19 8.19 0 003.74 1.69V8.94a4.81 4.81 0 01-.59-.25z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.813c0 2.467.611 4.87 1.768 7.021l-1.88 6.861 7.02-1.84a9.798 9.798 0 004.838 1.236h.004c5.442 0 9.867-4.41 9.868-9.839 0-2.63-.898-5.159-2.528-7.191A9.822 9.822 0 0011.051 6.979z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Informasi Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-300">Informasi</h3>
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
            <h3 className="text-lg font-bold mb-4 text-yellow-300">
              Tentang Kami
            </h3>
            <ul className="space-y-3">
              {tentangKamiLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-100 hover:text-yellow-300 transition-colors underline hover:no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty Column for Spacing */}
          <div></div>
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
