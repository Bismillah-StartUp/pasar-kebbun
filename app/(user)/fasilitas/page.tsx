import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layout';
import FacilitiesSection from '@/components/pages/fasilities';

export const metadata: Metadata = {
  title: 'Fasilitas Pengunjung',
  description: 'Fasilitas area Pasar Kebbun untuk kenyamanan pengunjung: parkir, mushola, toilet, dan area istirahat.',
  alternates: { canonical: '/fasilitas' },
};

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <FacilitiesSection />
      <Footer />
    </div>
  );
}
