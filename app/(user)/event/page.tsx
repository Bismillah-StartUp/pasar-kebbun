import { Navbar, Footer } from '@/components/layout';
import EventsSection from '@/components/pages/events';

export default function EventPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <EventsSection />
      <Footer />
    </div>
  );
}