'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BackLink, Card } from '@/components/ui';
import { BeritaForm, type BeritaFormValues } from '@/components/features/berita';
import { createBerita } from '@/services/berita.service';
import { ROUTES } from '@/constants/routes';

export default function NewsCreatePage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: BeritaFormValues) => {
    if (!values.gambar) {
      setError('Gambar berita wajib diisi.');
      return;
    }

    setError(null);
    try {
      await createBerita({ judul: values.judul, link: values.link, gambar: values.gambar });
      router.push(ROUTES.ADMIN.NEWS);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal menambahkan berita');
    }
  };

  return (
    <>
      <BackLink href={ROUTES.ADMIN.NEWS} label="Kembali ke Daftar Berita" />

      <Card className="flex flex-col gap-6">
        <h2 className="text-base font-black text-slate-800 tracking-tight select-none">Tambah Berita Baru</h2>
        {error && <p className="text-xs font-medium text-red-500">{error}</p>}
        <BeritaForm submitLabel="Tambah Berita" onSubmit={handleSubmit} />
      </Card>
    </>
  );
}
