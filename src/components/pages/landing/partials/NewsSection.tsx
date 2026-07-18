import Link from 'next/link';
import Image from 'next/image';
import prisma from '@/lib/prisma';
import { formatDate } from '@/lib/utils';

export default async function NewsSection() {
  const news = await prisma.news.findMany({
    orderBy: { date: 'desc' },
    take: 3,
  });

  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase border border-gray-200 rounded-full inline-block px-3 py-1 mb-4">
          Terbaru
        </p>
        <h2 className="text-2xl leading-8 font-bold text-gray-900 mb-8">Berita &amp; Informasi</h2>

        {news.length === 0 ? (
          <p className="text-sm text-gray-500">Belum ada berita saat ini.</p>
        ) : (
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {news.map((item) => {
              const isManual = item.type === 'MANUAL';

              return (
              <Link key={item.uuid} href={isManual ? `/berita/${item.uuid}` : (item.link ?? '#')} target={isManual ? undefined : '_blank'}
                className="group flex flex-col shrink-0 snap-start w-[85%] sm:w-[320px] rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative w-full h-44 bg-gray-100">
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xs text-gray-400 mb-2">{formatDate(item.date)}</p>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-xs text-primary font-semibold flex items-center gap-1 mt-auto hover:underline">
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
  );
}
