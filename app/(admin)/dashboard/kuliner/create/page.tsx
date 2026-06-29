import { AdminLayout } from '@/components/layout';
import { Breadcrumb } from '@/components/ui';
import KulinerCreatePage from '@/components/pages/dashboard/kuliner-create';

export default function AdminKulinerCreatePage() {
  return (
    <AdminLayout header={<Breadcrumb items={['Kuliner', 'Tambah Kuliner']} />}>
      <KulinerCreatePage />
    </AdminLayout>
  );
}
