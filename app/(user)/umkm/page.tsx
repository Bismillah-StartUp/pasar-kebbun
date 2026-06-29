import { Navbar, Footer } from '@/components/layout';
import TenantsSection from '@/components/pages/tenants';

export default function UmkmPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <TenantsSection />
      <Footer />
    </div>
  );
}
