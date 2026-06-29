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

      <Card>
        <KulinerForm submitLabel="Tambah +" onSubmit={handleSubmit} />
      </Card>
    </>
  );
}
