import { Navbar, Footer } from '@/components/layout';
import FacilitiesSection from '@/components/pages/fasilities';

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <FacilitiesSection />
      <Footer />
    </div>
  );
}
