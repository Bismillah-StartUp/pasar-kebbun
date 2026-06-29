import { AdminLayout } from '@/components/layout';
import ProfilePage from '@/components/pages/dashboard/profile';

export default function AdminProfilePage() {
  return (
    <AdminLayout title="Profil">
      <ProfilePage />
    </AdminLayout>
  );
}
