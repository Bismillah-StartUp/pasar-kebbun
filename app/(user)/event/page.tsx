import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/layout';
import EventsSection from '@/components/pages/events';

export const metadata: Metadata = {
  title: 'Event, Festival & Pertunjukan Budaya',
  description: 'Agenda pertunjukan, workshop, dan festival budaya di Pasar Kebbun, Saronggi, Sumenep.',
  alternates: { canonical: '/event' },
};

export default function EventPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <EventsSection />
      <Footer />
    </div>
  );
}