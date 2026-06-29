import { AdminLayout } from '@/components/layout';
import DashboardPage from '@/components/pages/dashboard';

export default function AdminDashboardPage() {
  return (
    <AdminLayout title="Dashboard">
      <DashboardPage />
    </AdminLayout>
  );
}
