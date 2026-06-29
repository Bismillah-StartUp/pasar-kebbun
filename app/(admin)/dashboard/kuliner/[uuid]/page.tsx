import { AdminLayout } from '@/components/layout';
import { Breadcrumb } from '@/components/ui';
import KulinerDetailPage from '@/components/pages/dashboard/kuliner-detail';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export default async function AdminKulinerDetailPage({ params }: PageProps) {
  const { uuid } = await params;

  return (
    <AdminLayout header={<Breadcrumb items={['Kuliner', uuid]} />}>
      <KulinerDetailPage uuid={uuid} />
    </AdminLayout>
  );
}
