'use client';

import { AdminLayout } from '@/components/layout';
import { BackLink, Breadcrumb } from '@/components/ui';
import { KulinerDetail } from '@/components/features/kuliner';
import { useKulinerDetail } from '@/hooks/useKulinerDetail';
import { ROUTES } from '@/constants/routes';

interface KulinerDetailPageProps {
  uuid: string;
}

export default function KulinerDetailPage({ uuid }: KulinerDetailPageProps) {
  const { kuliner, isLoading } = useKulinerDetail(uuid);

  return (
    <AdminLayout header={<Breadcrumb items={['Kuliner', kuliner?.nama ?? '...']} />}>
      {isLoading ? (
        <div className="flex items-center justify-center h-64 text-sm text-slate-400">Memuat data...</div>
      ) : !kuliner ? (
        <div className="flex items-center justify-center h-64 text-sm text-slate-400">Kuliner tidak ditemukan.</div>
      ) : (
        <>
          <BackLink href={ROUTES.ADMIN.KULINER} label="Kembali ke Kuliner" />
          <KulinerDetail kuliner={kuliner} />
        </>
      )}
    </AdminLayout>
  );
}
