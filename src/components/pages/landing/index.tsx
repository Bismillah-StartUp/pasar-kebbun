import { Navbar, Footer } from '@/components/layout';
import { FeatureCard } from '@/components/ui';
import HeadViews from '@/components/ui/customs/headviews';
import ArticleSlides from '@/components/pages/landing/partials/article-slides';
import { LANDING_IMAGES, LANDING_ARTICLES, LANDING_FEATURES } from '@/constants/landing';

export default function LandingPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />

      <HeadViews images={LANDING_IMAGES} />

      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-2 text-center">PASAR KEBBUN</h1>
          <p className="text-xl text-accent font-semibold text-center mb-8">Wisata Kuliner, Budaya, dan Alam</p>

          <p className="text-center text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            Pasar tradisional unik mengusung konsep tempo dulu dengan nuansa tradisional yang kental menjajikan kuliner
            khas Madura, sistem transaksi tidak menggunakan uang rupiah secanggih biasa melainkan melainkan koin khusus
            yang harus diambil di loket terlebih dahulu. Pasar Kebbun juga menyajikan pengalaman budaya yang kaya dengen
            pertunjukan seni dan kesempatan menikimati keindahan alam sektor melalui aktivitas seperti menyewa perahu kecil.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {LANDING_FEATURES.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>

      <ArticleSlides articles={LANDING_ARTICLES} />

      <Footer />
    </main>
  );
}
