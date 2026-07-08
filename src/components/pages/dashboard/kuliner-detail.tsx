'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { AdminLayout } from '@/components/layout';
import { BackLink, Breadcrumb } from '@/components/ui';
import { KulinerDetail, type KulinerEditValues } from '@/components/features/kuliner';
import { useKulinerDetail } from '@/hooks/useKulinerDetail';
import { deleteKuliner, updateKuliner } from '@/services/kuliner.service';
import { ROUTES } from '@/constants/routes';

interface KulinerDetailPageProps {
  uuid: string;
}

export default function KulinerDetailPage({ uuid }: KulinerDetailPageProps) {
  const router = useRouter();
  const { kuliner, isLoading } = useKulinerDetail(uuid);
  const [isSaving, setIsSaving] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Apakah Anda yakin ingin menghapus kuliner ini?')) return;
    try {
      await deleteKuliner(uuid);
      toast.success('Kuliner berhasil dihapus.');
      router.push(ROUTES.ADMIN.KULINER);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Gagal menghapus kuliner.');
    }
  };

  const handleSave = async (values: KulinerEditValues) => {
    setIsSaving(true);
    try {
      await updateKuliner(uuid, {
        nama: values.nama,
        jenis: values.jenis,
        penjelasan: values.penjelasan,
        hargaKoin: values.hargaKoin,
        photos: values.photos.map((photo) => ({ file: photo.file, existingId: photo.existingId })),
      });
      router.refresh();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AdminLayout header={<Breadcrumb items={['Kuliner', kuliner?.nama ?? '...']} />}>
      {isLoading ? (
        <div className="flex items-center justify-center h-64 text-sm text-slate-400">Memuat data...</div>
      ) : !kuliner ? (
        <div className="flex items-center justify-center h-64 text-sm text-slate-400">Kuliner tidak ditemukan.</div>
      ) : (
        <>
          <BackLink href={ROUTES.ADMIN.KULINER} label="Kembali ke Kuliner" />
          <KulinerDetail kuliner={kuliner} onDelete={handleDelete} onSave={handleSave} isSaving={isSaving} />
        </>
      )}
    </AdminLayout>
  );
}
