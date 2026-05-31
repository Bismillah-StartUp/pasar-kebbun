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
    image: '/assets/images/fasilities/tukar_uang.png',
    imageAlt: 'Penukaran Uang',
  },
  {
    id: 2,
    title: 'Tempat Duduk',
    description:
      'Tempat duduk tersedia di dalam berbagai bentuk dan lokasi yang tersebar di area pasar. Kebersihan dan kenyamanan tempat duduk merupakan prioritas utama untuk memastikan pengunjung bisa menikimati suasana pasar dengan nyaman, dengan menungkinkan mereka untuk bersantai, berinteraksi, menikmati makanan dan pertunjukan, serta menikmati dalam pedessaan yang tenang.',
    image: '/assets/images/fasilities/duduk.png',
    imageAlt: 'Tempat Duduk',
  },
  {
    id: 3,
    title: 'Tikar',
    description:
      'Tikar Isar ini disediakan di beberapa lokasi yang tersedia di area leslihan yang lainnya dibawah pohon-pohon penggaduan madesat sebagat alternatif/ pengunjung untuk bener-bener dari pertunjukan pasar sambil menyentap makanan beli, menikmpatikan suasana pasar tradisional yang menarik beli, mempersembahkan nyaman tradisional yang menarik beli, menyentap nyaman tradisional.',
    image: '/assets/images/fasilities/tikar.png',
    imageAlt: 'Tikar',
  },
  {
    id: 4,
    title: 'Perahu',
    description:
      'Di area pasar terdapat aliran sungai atau kolam dialui oleh satuan atau sungai air yang dialui dengan 2 koin pengunjung dapat menikmati perjalanan tradisional berkeliling didalam area pasar dengan petunjuk guide yang berpengalaman. Fasilitas ini memberikan kesempatan bagi pengunjung, terumama anak-anak, untuk menikmati susasana pasar dari sudut pandang yang berbeda.',
    image: '/assets/images/fasilities/perahu.png',
    imageAlt: 'Perahu',
  },
  {
    id: 5,
    title: 'Kamera 360',
    description:
      'Cukup dengan 2 koin pengunjung bisa menyimpan momen berharga bersama teman dan keluarga dengan menggunakan kamera 360 derajat yang disediakan. Pengunjung bisa merekam Video sinematik 360 derajat ini disimpan langsung ke media sosial',
    image: '/assets/images/fasilities/kamera360.png',
    imageAlt: 'Kamera 360',
  },
];

export default function FacilitiesSection() {
  return (
    <div className="flex flex-col w-full">
      {/* Facilities List */}
      <section className="w-full bg-white py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-16">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                {/* Image - Selalu di Kiri pada Desktop */}
                <div className="w-full md:w-1/2 shrink-0">
                  <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src={facility.image}
                      alt={facility.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content - Berada di Kanan */}
                <div className="w-full md:w-1/2 flex flex-col justify-center pt-2">
                  {/* Title - Text Center */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#166534] text-center mb-4 tracking-wide">
                    {facility.title}
                  </h3>
                  
                  {/* Description - Text Justify & Hijau Tua */}
                  <p className="text-[#166534] font-medium leading-relaxed text-justify text-[14px] md:text-[15px]">
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