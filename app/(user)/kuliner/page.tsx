import { Navbar, Footer } from '@/components/layout';
import CulinariesList from '@/components/pages/culinaries';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Kuliner Tradisional Khas Madura',
  description: 'Jelajahi ragam kuliner tradisional khas Madura yang dijajakan setiap Minggu di Pasar Kebbun, Saronggi, Sumenep.',
  alternates: { canonical: '/kuliner' },
};

export default function KulinerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <CulinariesList />
      </main>
      <Footer />
    </div>
  );
}
