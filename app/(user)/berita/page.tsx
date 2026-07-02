import { Navbar, Footer } from '@/components/layout';
import BeritaSection from '@/components/pages/berita';

export default function BeritaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <BeritaSection />
      <Footer />
    </div>
  );
}
