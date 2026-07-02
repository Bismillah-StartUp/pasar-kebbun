import PageHero from '@/components/pages/(user)/partials/PageHero';
import SectionLabel from '@/components/pages/(user)/partials/SectionLabel';

export default function BeritaSection() {
  return (
    <div className="w-full bg-white">
      <PageHero
        image="/assets/images/landings/landing_three.png"
        title="Berita"
      />

      <section className="w-full py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <SectionLabel text="Kabar Terbaru" />
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Berita Segera Hadir
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Halaman berita Pasar Kebbun sedang kami siapkan. Nantikan update kegiatan, event, dan informasi terbaru di sini.
          </p>
        </div>
      </section>
    </div>
  );
}
