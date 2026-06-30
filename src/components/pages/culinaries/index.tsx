import CulinaryCard from '@/components/ui/customs/culinary-card';
import prisma from '@/lib/prisma';

export default async function CulinariesList() {
  const culinaries = await prisma.culinary.findMany({
    include: { photos: { orderBy: { order: 'asc' } } },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Kuliner Madura</h1>
          <p className="text-gray-600">Nikmati kelezatan autentik kuliner tradisional Madura</p>
        </div>

        <div className="space-y-16">
          {culinaries.map((culinary) => (
            <CulinaryCard
              key={culinary.uuid}
              image={culinary.photos[0]?.url ?? ''}
              title={culinary.name}
              description={culinary.description}
              hargaKoin={culinary.coinPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
