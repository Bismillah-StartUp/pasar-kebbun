import { AdminLayout } from '@/components/layout';
import { Breadcrumb } from '@/components/ui';
import NewsDetailPage from '@/components/pages/dashboard/news-detail';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export default async function AdminNewsDetailPage({ params }: PageProps) {
  const { uuid } = await params;

  return (
    <AdminLayout header={<Breadcrumb items={['Berita', 'Edit Berita']} />}>
      <NewsDetailPage uuid={uuid} />
    </AdminLayout>
  );
}
