import { notFound } from 'next/navigation';
import { Navbar, Footer } from '@/components/layout';
import BeritaDetailPage from '@/components/pages/berita/detail';
import prisma from '@/lib/prisma';

interface PageProps {
  params: Promise<{ uuid: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { uuid } = await params;
  const news = await prisma.news.findUnique({ where: { uuid } });

  if (!news || news.type !== 'MANUAL') {
    return { title: 'Berita' };
  }

  return {
    title: news.title,
    description: news.content?.slice(0, 160),
    alternates: { canonical: `/berita/${news.uuid}` },
    openGraph: {
      type: 'article',
      title: news.title,
      description: news.content?.slice(0, 160),
      images: [news.imageUrl],
      publishedTime: news.date.toISOString(),
    },
  };
}

export default async function BeritaDetailRoute({ params }: PageProps) {
  const { uuid } = await params;

  const news = await prisma.news.findUnique({ where: { uuid } });

  if (!news || news.type !== 'MANUAL') {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: news.title,
    datePublished: news.date.toISOString(),
    dateModified: news.updatedAt.toISOString(),
    image: [news.imageUrl],
    author: {
      '@type': 'Organization',
      name: 'Pasar Kebbun',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://www.pasar-kebbun.id' },
      { '@type': 'ListItem', position: 2, name: 'Berita', item: 'https://www.pasar-kebbun.id/berita' },
      { '@type': 'ListItem', position: 3, name: news.title, item: `https://www.pasar-kebbun.id/berita/${news.uuid}` },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <BeritaDetailPage news={news} />
      <Footer />
    </div>
  );
}
