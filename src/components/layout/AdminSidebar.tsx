'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ADMIN_MENU_ITEMS, FiLogOut } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/hooks/useAuth';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const isMenuActive = (href: string) => {
    if (href === ROUTES.ADMIN.DASHBOARD) {
      return pathname === href || pathname === ROUTES.USER.HOME;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <Sidebar
      collapsible="icon"
      className="border-none [--sidebar:var(--primary)] [--sidebar-accent:color-mix(in_oklch,white_10%,var(--primary))] [--sidebar-accent-foreground:white] [--sidebar-foreground:white] [--sidebar-border:transparent]"
    >
      <SidebarHeader className="p-0">
        <Link
          href={ROUTES.USER.HOME}
          className="flex items-center gap-3 px-2 py-4 border-b border-white/10 hover:opacity-80 transition-opacity group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
        >
          <Image
            src="/assets/icons/logo-pk-green.png"
            alt="Pasar Kebbun Logo"
            className="object-contain shrink-0"
            width={48}
            height={48}
          />
          <div className="group-data-[collapsible=icon]:hidden">
            <h2 className="text-sm font-bold tracking-wider leading-tight whitespace-nowrap text-white">PASAR KEBBUN</h2>
            <span className="text-[10px] text-green-300 font-semibold tracking-widest block mt-0.5 whitespace-nowrap">
              PANEL ADMIN
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-4 py-2 group-data-[collapsible=icon]:px-2">
        <SidebarMenu className="gap-1.5">
          {ADMIN_MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = isMenuActive(item.href);

            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.name}
                  size="lg"
                  className="rounded-2xl text-sm font-medium text-white/90 group-data-[collapsible=icon]:size-12! data-active:bg-white data-active:text-primary data-active:font-semibold data-active:shadow-md data-active:hover:bg-white data-active:hover:text-primary"
                >
                  <Link href={item.href} className="group-data-[collapsible=icon]:justify-center">
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="group-data-[collapsible=icon]:hidden">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="px-4 pb-4 group-data-[collapsible=icon]:px-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={logout}
              tooltip="Logout"
              size="lg"
              className="rounded-2xl text-sm font-medium text-white/90 group-data-[collapsible=icon]:size-12! group-data-[collapsible=icon]:justify-center cursor-pointer"
            >
              <FiLogOut className="w-5 h-5 shrink-0 transform rotate-180" />
              <span className="group-data-[collapsible=icon]:hidden">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
