import { AdminHeader } from './AdminHeader';

interface AdminLayoutProps {
  title?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
}

export function AdminLayout({ title, header, children }: AdminLayoutProps) {
  return (
    <>
      {header ?? <AdminHeader title={title} />}

      <main className="p-6 flex flex-col gap-6 max-w-400 w-full mx-auto">{children}</main>
    </>
  );
}
