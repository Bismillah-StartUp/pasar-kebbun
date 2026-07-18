import { Suspense } from 'react';
import { AdminLayout } from '@/components/layout';
import { Breadcrumb } from '@/components/ui';
import NewsCreatePage from '@/components/pages/dashboard/news-create';

export default function AdminNewsCreatePage() {
  return (
    <AdminLayout header={<Breadcrumb items={['Berita', 'Tambah Berita']} />}>
      <Suspense>
        <NewsCreatePage />
      </Suspense>
    </AdminLayout>
  );
}
