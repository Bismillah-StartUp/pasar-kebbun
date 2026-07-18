import { cookies } from 'next/headers';
import { AdminSidebar } from '@/components/layout';
import { SidebarProvider } from '@/components/ui/sidebar';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value !== 'false';

  return (
    <SidebarProvider
      defaultOpen={defaultOpen}
      className="min-h-screen bg-slate-50"
      style={{ '--sidebar-width-icon': '4.5rem' } as React.CSSProperties}
    >
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">{children}</div>
    </SidebarProvider>
  );
}
