import { Navbar, Footer } from '@/components/layout';
import CulinariesList from '@/components/pages/culinaries';

export const metadata = {
  title: 'Kuliner Madura | Pasar Kebun Tanean',
  description: 'Jelajahi kelezatan autentik kuliner tradisional Madura di Pasar Kebun Tanean',
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
