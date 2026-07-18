'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { BackLink, Card } from '@/components/ui';
import { BeritaForm, type BeritaFormValues } from '@/components/features/berita';
import { createBerita } from '@/services/berita.service';
import { ROUTES } from '@/constants/routes';

export default function NewsCreatePage() {
  const router = useRouter();

  const handleSubmit = async (values: BeritaFormValues) => {
    if (!values.gambar) {
      toast.warning('Gambar berita wajib diisi.');
      return;
    }

    try {
      await createBerita({
        judul: values.judul,
        tipe: values.tipe,
        link: values.link,
        konten: values.konten,
        gambar: values.gambar,
      });
      toast.success('Berita berhasil ditambahkan.');
      router.push(ROUTES.ADMIN.NEWS);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Gagal menambahkan berita');
    }
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
