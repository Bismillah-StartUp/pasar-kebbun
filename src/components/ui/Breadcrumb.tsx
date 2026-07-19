'use client';

import { FiBell } from 'react-icons/fi';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface BreadcrumbProps {
  items: string[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const today = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-3 text-xs font-semibold tracking-wide">
        <SidebarTrigger className="cursor-pointer" />
        {items.map((item, index) => (
          <span key={item} className="contents">
            <span className={index === items.length - 1 ? 'text-slate-800' : 'text-slate-400'}>{item}</span>
            {index < items.length - 1 && <span className="text-slate-300 font-normal mx-1">&gt;</span>}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative p-2.5 text-gray-500 transition-all duration-200 bg-gray-50 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none cursor-pointer"
          aria-label="Notifikasi"
        >
          <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full ring-1 ring-white" />
          <FiBell className="w-5 h-5" />
        </button>

        <div className="px-4 py-2 border border-gray-200 rounded-full text-xs font-medium text-gray-600 bg-white shadow-sm select-none">
          {today}
        </div>
      </div>
    </header>
  );
}
