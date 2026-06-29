import { Navbar, Footer } from '@/components/layout';
import AboutSection from '@/components/pages/about';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
}