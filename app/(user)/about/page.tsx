import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layout';
import AboutSection from '@/components/pages/about';

export const metadata: Metadata = {
  title: 'Tentang Pasar Kebbun',
  description: 'Sejarah, konsep tempo dulu, dan sistem transaksi non-rupiah Pasar Kebbun, pasar rakyat berwawasan alam di Saronggi, Sumenep.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
}