'use client';

import Link from 'next/link';
import { DropdownMenu } from 'radix-ui';
import { FiPlus, FiLink, FiEdit3, FiChevronDown } from 'react-icons/fi';
import { ROUTES } from '@/constants/routes';

export function AddBeritaMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-full shadow-sm transition-all whitespace-nowrap outline-none cursor-pointer"
        >
          <FiPlus className="w-4 h-4" />
          Tambah Berita
          <FiChevronDown className="w-3.5 h-3.5" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="min-w-56 bg-white border border-slate-100 rounded-2xl shadow-lg p-1.5 z-50"
        >
          <DropdownMenu.Item asChild>
            <Link
              href={`${ROUTES.ADMIN.NEWS_CREATE}?tipe=manual`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 outline-none cursor-pointer transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <FiEdit3 className="w-4 h-4" />
              </span>
              <span className="flex flex-col gap-0.5">
                Tulis Manual
                <span className="text-[10px] font-medium text-slate-400">Tulis isi berita sendiri</span>
              </span>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link
              href={`${ROUTES.ADMIN.NEWS_CREATE}?tipe=link`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 outline-none cursor-pointer transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-green-50 text-emerald-600 flex items-center justify-center shrink-0">
                <FiLink className="w-4 h-4" />
              </span>
              <span className="flex flex-col gap-0.5">
                Dari Link Eksternal
                <span className="text-[10px] font-medium text-slate-400">Tautkan ke berita di luar</span>
              </span>
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
