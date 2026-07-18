import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import type { News } from '@prisma/client';
import { formatDate } from '@/lib/utils';

interface BeritaDetailPageProps {
  news: News;
}

export default function BeritaDetailPage({ news }: BeritaDetailPageProps) {
  const sanitizedContent = DOMPurify.sanitize(news.content ?? '');

  return (
    <article className="w-full bg-white">
      <div className="relative w-full h-64 md:h-96 bg-gray-100">
        <Image src={news.imageUrl} alt={news.title} fill className="object-cover" priority />
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-xs text-gray-400 mb-2">{formatDate(news.date)}</p>
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-snug">{news.title}</h1>
        <div
          className="prose prose-sm md:prose-base max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </div>
    </article>
  );
}
