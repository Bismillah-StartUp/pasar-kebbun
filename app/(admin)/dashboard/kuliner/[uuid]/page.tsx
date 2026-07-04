import KulinerDetailPage from '@/components/pages/dashboard/kuliner-detail';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export default async function AdminKulinerDetailPage({ params }: PageProps) {
  const { uuid } = await params;

  return <KulinerDetailPage uuid={uuid} />;
}
