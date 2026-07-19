import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layout';
import TenantsSection from '@/components/pages/tenants';

export const metadata: Metadata = {
  title: 'Produk UMKM Lokal Sumenep',
  description: '100+ produk lokal dari 15+ pedagang UMKM pilihan di Pasar Kebbun, Saronggi, Sumenep.',
  alternates: { canonical: '/umkm' },
};

export default function UmkmPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <TenantsSection />
      <Footer />
    </div>
  );
}
