import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';

interface AdminLayoutProps {
  title?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
}

export function AdminLayout({ title, header, children }: AdminLayoutProps) {
  return (
    <div className="flex w-full min-h-screen bg-slate-50">
      <AdminSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        {header ?? <AdminHeader title={title} />}

        <main className="p-6 flex flex-col gap-6 max-w-400 w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
