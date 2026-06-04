'use client';

import { FiBell } from 'react-icons/fi'; // Menggunakan Feather Icons agar clean dan minimalis

export default function NavHeader({ title = "Dashboard" }: { title?: string }) {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-100">
      {/* Bagian Kiri: Judul Halaman */}
      <div>
        <h1 className="text-lg font-bold text-slate-800 tracking-wide">
          {title}
        </h1>
      </div>

      {/* Bagian Kanan: Notifikasi & Tanggal */}
      <div className="flex items-center gap-4">
        {/* Tombol Notifikasi */}
        <button 
          onClick={() => console.log('Notifikasi diklik')} // Siap untuk fungsi interaktif
          className="relative p-2.5 text-gray-500 transition-all duration-200 bg-gray-50 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
          aria-label="Notification"
        >
          {/* Dot Kuning Indikator Notifikasi */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full ring-1 ring-white"></span>
          
          {/* Icon Lonceng dari react-icons */}
          <FiBell className="w-5 h-5" />
        </button>

        {/* Badge Tanggal */}
        <div className="px-4 py-2 border border-gray-200 rounded-full text-xs font-medium text-gray-600 bg-white shadow-sm select-none">
          28 Mei 2026
        </div>
      </div>
    </header>
  );
}