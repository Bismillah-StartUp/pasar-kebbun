import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';
import prisma from '@/lib/prisma';
import { formatDate } from '@/lib/utils';

const CATEGORY_LABEL: Record<string, string> = {
  EVENT: 'Event',
  CULINARY: 'Kuliner',
  UMKM: 'UMKM',
  GENERAL: 'Umum',
};

export default async function NewsSection() {
  const news = await prisma.news.findMany({
    orderBy: { date: 'desc' },
    take: 3,
  });

  if (news.length === 0) return null;

  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase border border-gray-200 rounded-full inline-block px-3 py-1 mb-4">
          Terbaru
        </p>
        <h2 className="text-2xl font-black text-gray-900 mb-8">Berita &amp; Informasi</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <Link key={item.uuid} href={item.link} target="_blank"
              className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative w-full h-44 bg-gray-100">
                <Image src={item.imageUrl} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-bold text-primary mb-2">{CATEGORY_LABEL[item.category] ?? item.category}</p>
                <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-xs text-primary font-semibold flex items-center gap-1 mt-auto hover:underline">
                  Baca Selengkapnya <span>›</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
