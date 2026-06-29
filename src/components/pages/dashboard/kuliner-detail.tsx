'use client';

import { BackLink } from '@/components/ui';
import { KulinerDetail } from '@/components/features/kuliner';
import { useKulinerDetail } from '@/hooks/useKulinerDetail';
import { ROUTES } from '@/constants/routes';

interface KulinerDetailPageProps {
  uuid: string;
}

export default function KulinerDetailPage({ uuid }: KulinerDetailPageProps) {
  const { kuliner, isLoading } = useKulinerDetail(uuid);

  if (isLoading) {
    return <div className="flex items-center justify-center h-64 text-sm text-slate-400">Memuat data...</div>;
  }

  if (!kuliner) {
    return <div className="flex items-center justify-center h-64 text-sm text-slate-400">Kuliner tidak ditemukan.</div>;
  }

  return (
    <>
      <BackLink href={ROUTES.ADMIN.KULINER} label="Kembali ke Kuliner" />
      <KulinerDetail kuliner={kuliner} />
    </>
  );
}
