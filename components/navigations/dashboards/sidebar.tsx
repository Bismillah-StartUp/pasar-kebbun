'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiGrid, FiUser, FiLogOut } from 'react-icons/fi';
import { MdOutlineRestaurant } from 'react-icons/md';
import { HiOutlineNewspaper } from 'react-icons/hi2';
import Image from 'next/image';

export default function Sidebar() {
  const pathname = usePathname();

  // Konfigurasi Menu Navigasi
  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: FiGrid },
    { name: 'Kuliner', href: '/dashboard/kuliner', icon: MdOutlineRestaurant },
    { name: 'Berita', href: '/berita', icon: HiOutlineNewspaper },
    { name: 'Profil', href: '/profil', icon: FiUser },
  ];

  return (
    <aside className="w-64 h-screen bg-[#035A1A] text-white flex flex-col justify-between p-4 select-none">
      
      <div className="flex flex-col gap-6">
        
        <div className="flex items-center gap-3 px-2 py-4 border-b border-white/10">
          <Image 
            src="/assets/icons/logo-pk-green.png"
            alt="Pasar Kebbun Logo" 
            className="object-contain"
            width={48}
            height={48}
          />
          
          <div>
            <h2 className="text-sm font-bold tracking-wider leading-tight">
              PASAR KEBBUN
            </h2>
            <span className="text-[10px] text-green-300 font-semibold tracking-widest block mt-0.5">
              PANEL ADMIN
            </span>
          </div>
        </div>

        {/* List Menu Navigasi */}
        <nav className="flex flex-col gap-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            // Menentukan apakah menu sedang aktif berdasarkan URL saat ini
            const isActive = pathname === item.href || (item.href === '/dashboard' && pathname === '/');

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-white text-[#035A1A] font-semibold shadow-md'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bagian Bawah: Tombol Logout */}
      <div className="mb-2">
        <button
          onClick={() => console.log('Proses logout...')}
          className="flex items-center gap-4 w-full px-4 py-3.5 text-sm font-medium text-white/90 hover:bg-white/10 rounded-2xl transition-all duration-150 text-left"
        >
          {/* Icon logout dibalik secara horizontal agar arah panahnya menghadap keluar */}
          <FiLogOut className="w-5 h-5 shrink-0 transform rotate-180" />
          <span>Logout</span>
        </button>
      </div>

    </aside>
  );
}