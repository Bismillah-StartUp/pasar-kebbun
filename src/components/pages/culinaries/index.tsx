import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import PageHero from '@/components/pages/(user)/partials/PageHero';
import SectionLabel from '@/components/pages/(user)/partials/SectionLabel';

const KOIN_TO_RUPIAH: Record<number, string> = {
  1: 'Rp 2.500',
  2: 'Rp 5.000',
  3: 'Rp 7.500',
  4: 'Rp 10.000',
};

const TYPE_LABEL: Record<string, string> = { FOOD: 'Makanan', DRINK: 'Minuman' };
const TYPE_COLOR: Record<string, string> = {
  FOOD: 'bg-amber-400 text-white',
  DRINK: 'bg-blue-400 text-white',
};

export default async function CulinariesPage() {
  const culinaries = await prisma.culinary.findMany({
    include: { photos: { orderBy: { order: 'asc' }, take: 1 } },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <PageHero
        image="/assets/images/landings/landing_one.png"
        title="Kuliner"
      />

      <section className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Menu Pilihan" />
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
            Kuliner Tradisional Pasar Kebbun
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Setiap hidangan dibuat dengan resep turun-temurun menggunakan bahan segar dan rempah pilihan.
          </p>

          {culinaries.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm">Belum ada data kuliner.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {culinaries.map((item) => {
                const photo = item.photos[0];
                return (
                  <div key={item.uuid} className="flex flex-col rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative w-full h-48 bg-gray-100">
                      {photo ? (
                        <Image src={photo.url} alt={item.name} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-400">Tidak ada foto</span>
                        </div>
                      )}
                      <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${TYPE_COLOR[item.type] ?? 'bg-gray-400 text-white'}`}>
                        {TYPE_LABEL[item.type] ?? item.type}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-accent font-bold mb-1">
                        {item.coinPrice} Koin{' '}
                        <span className="text-gray-400 font-normal">
                          ({KOIN_TO_RUPIAH[item.coinPrice] ?? '-'})
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
                        {item.description}
                      </p>
                      <Link
                        href={`/kuliner/${item.slug}`}
                        className="w-full bg-primary text-white text-xs font-bold text-center py-2 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Lihat Selengkapnya ›
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
