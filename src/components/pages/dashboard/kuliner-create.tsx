'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BackLink, Card } from '@/components/ui';
import { KulinerForm, type KulinerFormValues } from '@/components/features/kuliner';
import { createKuliner } from '@/services/kuliner.service';
import { ROUTES } from '@/constants/routes';

export default function KulinerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: KulinerFormValues) => {
    if (!values.jenis) return;

    setError(null);
    setIsSubmitting(true);

    try {
      await createKuliner({
        nama: values.nama,
        jenis: values.jenis,
        penjelasan: values.penjelasan,
        hargaKoin: values.hargaKoin,
        photos: values.photos
          .filter((photo) => photo.file)
          .map((photo) => ({ file: photo.file as File, isPrimary: photo.isPrimary })),
      });
      router.push(ROUTES.ADMIN.KULINER);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal menambahkan kuliner');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <BackLink href={ROUTES.ADMIN.KULINER} />

      <Card className="flex flex-col gap-6">
        <h2 className="text-base font-black text-slate-800 tracking-tight select-none">Tambah Kuliner</h2>
        {error && <p className="text-xs font-medium text-red-500">{error}</p>}
        <KulinerForm submitLabel={isSubmitting ? 'Menyimpan...' : 'Tambah +'} onSubmit={handleSubmit} />
      </Card>
    </>
  );
}
