import { notFound } from 'next/navigation';
import { Navbar, Footer } from '@/components/layout';
import KulinerDetailPage from '@/components/pages/culinaries/detail';
import prisma from '@/lib/prisma';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const culinary = await prisma.culinary.findUnique({ where: { slug } });

  return {
    title: culinary ? `${culinary.name} | Pasar Kebbun` : 'Kuliner | Pasar Kebbun',
  };
}

export default async function KulinerDetailRoute({ params }: PageProps) {
  const { slug } = await params;

  const culinary = await prisma.culinary.findUnique({
    where: { slug },
    include: { photos: { orderBy: { order: 'asc' } } },
  });

  if (!culinary) {
    notFound();
  }

  const others = await prisma.culinary.findMany({
    where: { type: culinary.type, uuid: { not: culinary.uuid } },
    include: { photos: { orderBy: { order: 'asc' }, take: 1 } },
    orderBy: { createdAt: 'desc' },
    take: 4,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <KulinerDetailPage culinary={culinary} others={others} />
      </main>
      <Footer />
    </div>
  );
}
