import type { Metadata } from 'next';
import LandingPage from '@/components/pages/landing';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Pasar Kebbun',
  alternateName: 'Pasar Kebbun Sumenep',
  description:
    'Pasar rakyat berwawasan alam dengan konsep tempo dulu, kuliner khas Madura, produk UMKM lokal, dan sistem transaksi non-rupiah.',
  url: 'https://www.pasar-kebbun.id',
  image: 'https://www.pasar-kebbun.id/assets/images/landings/landing_one.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "Dsn. Mora'an, Desa Saroka",
    addressLocality: 'Saronggi',
    addressRegion: 'Jawa Timur',
    addressCountry: 'ID',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '06:00', closes: '14:00' },
  ],
  sameAs: ['https://instagram.com/pasarkebbun', 'https://tiktok.com/@pasarkebbun'],
  telephone: '+6287713300678',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LandingPage />
    </>
  );
}
