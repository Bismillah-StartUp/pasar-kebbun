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

  return {
    title: news ? `${news.title} | Pasar Kebbun` : 'Berita | Pasar Kebbun',
  };
}

export default async function BeritaDetailRoute({ params }: PageProps) {
  const { uuid } = await params;

  const news = await prisma.news.findUnique({ where: { uuid } });

  if (!news || news.type !== 'MANUAL') {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <BeritaDetailPage news={news} />
      <Footer />
    </div>
  );
}
