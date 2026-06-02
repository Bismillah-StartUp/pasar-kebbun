import Navbar from '@/components/navigations/usersides/navbar';
import Footer from '@/components/navigations/usersides/footer';
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
