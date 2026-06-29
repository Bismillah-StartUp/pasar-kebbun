import CulinaryCard from '@/components/ui/customs/culinary-card';
import { getAllKuliner } from '@/services/kuliner.service';

export default async function CulinariesList() {
  const culinaries = await getAllKuliner();

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
              key={culinary.id}
              image={culinary.foto[0]}
              title={culinary.nama}
              description={culinary.penjelasan}
              hargaKoin={culinary.hargaKoin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
