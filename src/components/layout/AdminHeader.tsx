'use client';

import { FiBell } from 'react-icons/fi';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface AdminHeaderProps {
  title?: string;
}

export function AdminHeader({ title = 'Dashboard' }: AdminHeaderProps) {
  const today = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="cursor-pointer" />
        <h1 className="text-lg font-bold text-slate-800 tracking-wide">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative p-2.5 text-gray-500 transition-all duration-200 bg-gray-50 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none cursor-pointer"
          aria-label="Notifikasi"
        >
          <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full ring-1 ring-white"></span>
          <FiBell className="w-5 h-5" />
        </button>

        <div className="px-4 py-2 border border-gray-200 rounded-full text-xs font-medium text-gray-600 bg-white shadow-sm select-none">
          {today}
        </div>
      </div>
    </header>
  );
}
