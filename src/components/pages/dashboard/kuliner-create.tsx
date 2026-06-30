'use client';

import { useRouter } from 'next/navigation';
import { BackLink, Card } from '@/components/ui';
import { KulinerForm, type KulinerFormValues } from '@/components/features/kuliner';
import { ROUTES } from '@/constants/routes';

export default function KulinerCreatePage() {
  const router = useRouter();

  const handleSubmit = (values: KulinerFormValues) => {
    // TODO: kirim ke API setelah backend tersedia
    console.log('Tambah kuliner:', values);
    router.push(ROUTES.ADMIN.KULINER);
  };

  return (
    <>
      <BackLink href={ROUTES.ADMIN.KULINER} />

      <Card className="flex flex-col gap-6">
        <h2 className="text-base font-black text-slate-800 tracking-tight select-none">Tambah Kuliner</h2>
        <KulinerForm submitLabel="Tambah +" onSubmit={handleSubmit} />
      </Card>
    </>
  );
}
