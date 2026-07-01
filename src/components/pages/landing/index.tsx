import { Navbar, Footer } from '@/components/layout';
import HeroSection from './partials/HeroSection';
import InfoSection from './partials/InfoSection';
import AboutSection from './partials/AboutSection';
import ExploreSection from './partials/ExploreSection';
import NewsSection from './partials/NewsSection';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <InfoSection />
        <AboutSection />
        <ExploreSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
