import { AdminLayout } from '@/components/layout';
import NewsListPage from '@/components/pages/dashboard/news';

export default function AdminNewsPage() {
  return (
    <AdminLayout title="Berita">
      <NewsListPage />
    </AdminLayout>
  );
}
