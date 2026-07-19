'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { BackLink, Card } from '@/components/ui';
import { KulinerForm, KulinerImportForm, type KulinerFormValues } from '@/components/features/kuliner';
import { createKuliner, type ImportKulinerResult } from '@/services/kuliner.service';
import { ROUTES } from '@/constants/routes';

type CreateMode = 'manual' | 'import';

export default function KulinerCreatePage() {
  const router = useRouter();
  const [mode, setMode] = useState<CreateMode>('manual');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: KulinerFormValues) => {
    if (!values.jenis) return;

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
      toast.success('Kuliner berhasil ditambahkan.');
      router.push(ROUTES.ADMIN.KULINER);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Gagal menambahkan kuliner');
      setIsSubmitting(false);
    }
  };

  const handleImported = (result: ImportKulinerResult) => {
    if (result.created > 0 && result.errors.length === 0) {
      toast.success(`${result.created} kuliner berhasil diimpor.`);
      router.push(ROUTES.ADMIN.KULINER);
    }
  };

  return (
    <>
      <BackLink href={ROUTES.ADMIN.KULINER} />

      <Card className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-black text-slate-800 tracking-tight select-none">Tambah Kuliner</h2>
          <div className="flex items-center gap-1 p-1 bg-slate-50 border border-slate-200 rounded-full">
            <button
              type="button"
              onClick={() => setMode('manual')}
              className={cn(
                'px-4 py-1.5 text-xs font-bold rounded-full transition-colors cursor-pointer',
                mode === 'manual' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
              )}
            >
              Form Manual
            </button>
            <button
              type="button"
              onClick={() => setMode('import')}
              className={cn(
                'px-4 py-1.5 text-xs font-bold rounded-full transition-colors cursor-pointer',
                mode === 'import' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
              )}
            >
              Import Excel
            </button>
          </div>
        </div>

        {mode === 'manual' ? (
          <KulinerForm submitLabel={isSubmitting ? 'Menyimpan...' : 'Tambah +'} onSubmit={handleSubmit} />
        ) : (
          <KulinerImportForm onImported={handleImported} />
        )}
      </Card>
    </>
  );
}
