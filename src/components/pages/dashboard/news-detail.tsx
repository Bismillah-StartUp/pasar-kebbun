'use client';

import { useRouter } from 'next/navigation';
import { BackLink, Card } from '@/components/ui';
import { BeritaForm, type BeritaFormValues } from '@/components/features/berita';
import { useBeritaDetail } from '@/hooks/useBeritaDetail';
import { ROUTES } from '@/constants/routes';

interface NewsDetailPageProps {
  uuid: string;
}

export default function NewsDetailPage({ uuid }: NewsDetailPageProps) {
  const router = useRouter();
  const { berita, isLoading } = useBeritaDetail(uuid);

  const handleSubmit = (values: BeritaFormValues) => {
    // TODO: kirim ke API setelah backend tersedia
    console.log('Update berita:', uuid, values);
    router.push(ROUTES.ADMIN.NEWS);
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
        <BeritaForm
          initialValues={{ judul: berita.judul, link: berita.link }}
          submitLabel="Simpan Perubahan"
          onSubmit={handleSubmit}
        />
      </Card>
    </>
  );
}
