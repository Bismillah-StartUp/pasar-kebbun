'use client';

import { useRouter } from 'next/navigation';
import { BackLink, Card } from '@/components/ui';
import { BeritaForm, type BeritaFormValues } from '@/components/features/berita';
import { ROUTES } from '@/constants/routes';

export default function NewsCreatePage() {
  const router = useRouter();

  const handleSubmit = (values: BeritaFormValues) => {
    // TODO: kirim ke API setelah backend tersedia
    console.log('Tambah berita:', values);
    router.push(ROUTES.ADMIN.NEWS);
  };

  return (
    <>
      <BackLink href={ROUTES.ADMIN.NEWS} label="Kembali ke Daftar Berita" />

      <Card className="flex flex-col gap-6">
        <h2 className="text-base font-black text-slate-800 tracking-tight select-none">Tambah Berita Baru</h2>
        <BeritaForm submitLabel="Tambah Berita" onSubmit={handleSubmit} />
      </Card>
    </>
  );
}
