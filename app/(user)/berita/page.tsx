import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layout';
import BeritaSection from '@/components/pages/berita';

export const metadata: Metadata = {
  title: 'Berita & Informasi Terbaru',
  description: 'Kabar dan informasi terbaru seputar kegiatan, event, dan perkembangan Pasar Kebbun Sumenep.',
  alternates: { canonical: '/berita' },
};

export default function BeritaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <BeritaSection />
      <Footer />
    </div>
  );
}
