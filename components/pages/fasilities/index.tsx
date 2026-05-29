import Image from 'next/image';

interface Facility {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    title: 'Penukaran Uang',
    description:
      'Pengunjung wajib menukarkan uang tunai Rupiah melalui dengan koin khusus yang digunakan untuk bertransaksi. Setiap pasar setiaap koin Anda mamiliki nilai nominal sesuai dengan 2500 Rupiah. Sistem ini merupakan bagian dari konsep unik untuk menciptakan suasana belanja yang tradisional dan nostalgia zaman dahulu.',
    image: '/assets/images/landings/landing_one.png',
    imageAlt: 'Penukaran Uang',
  },
  {
    id: 2,
    title: 'Tempat Duduk',
    description:
      'Tempat duduk tersedia di dalam berbagai bentuk dan lokasi yang tersebar di area pasar. Kebersihan dan kenyamanan tempat duduk merupakan prioritas utama untuk memastikan pengunjung bisa menikimati suasana pasar dengan nyaman, dengan menungkinkan mereka untuk bersantai, berinteraksi, menikmati makanan dan pertunjukan, serta menikmati dalam pedessaan yang tenang.',
    image: '/assets/images/landings/landing_two.png',
    imageAlt: 'Tempat Duduk',
  },
  {
    id: 3,
    title: 'Tikar',
    description:
      'Tikar Isar ini disediakan di beberapa lokasi yang tersedia di area leslihan yang lainnya dibawah pohon-pohon penggaduan madesat sebagat alternatif/ pengunjung untuk bener-bener dari pertunjukan pasar sambil menyentap makanan beli, menikmpatikan suasana pasar tradisional yang menarik beli, mempersembahkan nyaman tradisional yang menarik beli, menyentap nyaman tradisional.',
    image: '/assets/images/landings/landing_three.png',
    imageAlt: 'Tikar',
  },
  {
    id: 4,
    title: 'Perahu',
    description:
      'Di area pasar terdapat aliran sungai atau kolam dialui oleh satuan atau sungai air yang dialui dengan 2 koin pengunjung dapat menikmati perjalanan tradisional berkeliling didalam area pasar dengan petunjuk guide yang berpengalaman. Fasilitas ini memberikan kesempatan bagi pengunjung, terumama anak-anak, untuk menikmati susasana pasar dari sudut pandang yang berbeda.',
    image: '/assets/images/landings/landing_four.png',
    imageAlt: 'Perahu',
  },
  {
    id: 5,
    title: 'Kamera 360',
    description:
      'Cukup dengan 2 koin pengunjung bisa menyimpan momen berharga bersama teman dan keluarga dengan menggunakan kamera 360 derajat yang disediakan. Pengunjung bisa merekam Video sinematik 360 derajat ini disimpan langsung ke media sosial',
    image: '/assets/images/landings/landing_five.png',
    imageAlt: 'Kamera 360',
  },
];

export default function FacilitiesSection() {
  return (
    <div className="flex flex-col w-full">
      {/* Facilities List */}
      <section className="w-full bg-white py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={facility.image}
                      alt={facility.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-green-700 mb-4">
                    {facility.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
