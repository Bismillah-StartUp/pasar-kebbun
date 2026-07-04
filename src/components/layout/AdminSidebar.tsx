'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ADMIN_MENU_ITEMS, FiLogOut } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

export function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const isMenuActive = (href: string) =>
    pathname === href || (href === ROUTES.ADMIN.DASHBOARD && pathname === ROUTES.USER.HOME);

  return (
    <aside className="w-64 h-screen sticky top-0 shrink-0 bg-primary text-white flex flex-col justify-between p-4 select-none overflow-y-auto">
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
            <h2 className="text-sm font-bold tracking-wider leading-tight">PASAR KEBBUN</h2>
            <span className="text-[10px] text-green-300 font-semibold tracking-widest block mt-0.5">
              PANEL ADMIN
            </span>
          </div>
        </div>

        <nav className="flex flex-col gap-1.5">
          {ADMIN_MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = isMenuActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-150',
                  isActive
                    ? 'bg-white text-primary font-semibold shadow-md'
                    : 'text-white/90 hover:bg-white/10'
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mb-2">
        <button
          type="button"
          onClick={logout}
          className="flex items-center gap-4 w-full px-4 py-3.5 text-sm font-medium text-white/90 hover:bg-white/10 rounded-2xl transition-all duration-150 text-left"
        >
          <FiLogOut className="w-5 h-5 shrink-0 transform rotate-180" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
