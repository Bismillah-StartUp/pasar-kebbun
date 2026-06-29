import { AdminLayout } from '@/components/layout';
import KulinerListPage from '@/components/pages/dashboard/kuliner';

export default function AdminKulinerPage() {
  return (
    <AdminLayout title="Kuliner">
      <KulinerListPage />
    </AdminLayout>
  );
}
