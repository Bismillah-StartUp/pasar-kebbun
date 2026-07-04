'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BackLink, Card } from '@/components/ui';
import { BeritaForm, type BeritaFormValues } from '@/components/features/berita';
import { useBeritaDetail } from '@/hooks/useBeritaDetail';
import { updateBerita } from '@/services/berita.service';
import { ROUTES } from '@/constants/routes';

interface NewsDetailPageProps {
  uuid: string;
}

export default function NewsDetailPage({ uuid }: NewsDetailPageProps) {
  const router = useRouter();
  const { berita, isLoading } = useBeritaDetail(uuid);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: BeritaFormValues) => {
    setError(null);
    try {
      await updateBerita(uuid, { judul: values.judul, link: values.link, gambar: values.gambar });
      router.push(ROUTES.ADMIN.NEWS);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal memperbarui berita');
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-64 text-sm text-slate-400">Memuat data...</div>;
  }

  if (!berita) {
    return <div className="flex items-center justify-center h-64 text-sm text-slate-400">Berita tidak ditemukan.</div>;
  }

  return (
    <>
      <BackLink href={ROUTES.ADMIN.NEWS} label="Kembali ke Daftar Berita" />

      <Card className="flex flex-col gap-6">
        <h2 className="text-base font-black text-slate-800 tracking-tight select-none">Edit Berita</h2>
        {error && <p className="text-xs font-medium text-red-500">{error}</p>}
        <BeritaForm
          initialValues={{ judul: berita.judul, link: berita.link, gambarPreview: berita.gambar }}
          submitLabel="Simpan Perubahan"
          onSubmit={handleSubmit}
        />
      </Card>
    </>
  );
}
