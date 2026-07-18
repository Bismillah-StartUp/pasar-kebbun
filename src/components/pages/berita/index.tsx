import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/pages/(user)/partials/PageHero';
import SectionLabel from '@/components/pages/(user)/partials/SectionLabel';
import prisma from '@/lib/prisma';
import { formatDate } from '@/lib/utils';

export default async function BeritaSection() {
  const news = await prisma.news.findMany({
    orderBy: { date: 'desc' },
  });

  return (
    <div className="w-full bg-white">
      <PageHero
        image="/assets/images/landings/landing_three.png"
        title="Berita"
      />

      <section className="w-full py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <SectionLabel text="Kabar Terbaru" />
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Berita & Informasi
            </h2>
          </div>

          {news.length === 0 ? (
            <p className="text-sm text-gray-600 text-center">
              Belum ada berita saat ini.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => {
                const isManual = item.type === 'MANUAL';

                return (
                <Link
                  key={item.uuid}
                  href={isManual ? `/berita/${item.uuid}` : (item.link ?? '#')}
                  target={isManual ? undefined : '_blank'}
                  className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full h-44 bg-gray-100">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-xs text-gray-400 mb-2">{formatDate(item.date)}</p>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-primary font-semibold flex items-center gap-1 mt-auto group-hover:underline">
                      Baca Selengkapnya <span>›</span>
                    </p>
                  </div>
                </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
