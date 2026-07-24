import Image from 'next/image';
import PageHero from '@/components/pages/(user)/partials/PageHero';
import SectionLabel from '@/components/pages/(user)/partials/SectionLabel';
import { MdOutlineWc, MdOutlineLocalParking, MdOutlineDeleteOutline, MdOutlineLightbulb } from 'react-icons/md';

const FACILITIES = [
  {
    number: '01',
    title: 'Penukaran Uang',
    description: 'Pengunjung wajib menukarkan uang tunai Rupiah mereka dengan koin kayu yang berfungsi sebagai alat pembayaran tunggal di seluruh area pasar setiap pasar. Setiap koin kayu memiliki nilai nominal setara dengan 2.500 Rupiah. Sistem ini merupakan bagian dari konsep unik pasar untuk menciptakan kembali suasana belanja tradisional dan nostalgia zaman dahulu.',
    image: '/assets/images/fasilities/tukar_uang.webp',
    imageLeft: true,
  },
  {
    number: '02',
    title: 'Tempat Duduk',
    description: 'Tempat duduk tersedia dalam berbagai bentuk dan lokasi yang menyebar di area pasar. Keberadaan tempat duduk ini sangat memadai untuk menampung ratusan pengunjung setiap minggunya, memungkinkan mereka untuk bersantai, berinteraksi, menikmati makanan dan pertunjukan, serta suasana alam pedesaan yang tenang.',
    image: '/assets/images/fasilities/duduk.webp',
    imageLeft: false,
  },
  {
    number: '03',
    title: 'Tikar',
    description: 'Tikar-tikar ini biasanya tersedia di area lesehan yang tersebar di bawah pepohonan rindang sebagai alternatif tempat duduk, memungkinkan pengunjung untuk benar-benar menikmati suasana asri dan pertunjukan pasar sambil menyantap makanan dan minuman tradisional yang mereka beli, menciptakan suasana piknik pedesaan yang nyaman dan berkesan.',
    image: '/assets/images/fasilities/tikar.webp',
    imageLeft: true,
  },
  {
    number: '04',
    title: 'Perahu',
    description: 'Di area pasar terdapat aliran sungai atau saluran air yang dikelola, cukup dengan 2 koin pengunjung dapat menyewa perahu dayung tradisional berkeliling area pasar. Fasilitas ini memberikan kesempatan bagi keluarga, terutama anak-anak, untuk menikmati suasana pasar dari sudut pandang yang berbeda.',
    image: '/assets/images/fasilities/perahu.webp',
    imageLeft: false,
  },
  {
    number: '05',
    title: 'Kamera 360',
    description: 'Cukup dengan 2 koin pengunjung dapat mendokumentasikan kunjungan bersama teman dan keluarga dengan kamera 360. Hasil rekaman berupa video sinematik 360 derajat ini dapat langsung dibagikan secara instan ke media sosial.',
    image: '/assets/images/fasilities/kamera360.webp',
    imageLeft: true,
  },
];

const GENERAL = [
  { icon: MdOutlineWc, label: 'Toilet Umum' },
  { icon: MdOutlineLocalParking, label: 'Area Parkir' },
  { icon: MdOutlineDeleteOutline, label: 'Sampah Terpilah' },
  { icon: MdOutlineLightbulb, label: 'Penerangan' },
];

export default function FacilitiesPage() {
  return (
    <div className="w-full bg-white">
      <PageHero
        image="/assets/images/fasilities/duduk.webp"
        title="Fasilitas"
      />

      {/* Layanan Utama */}
      <section className="w-full py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Fasilitas Utama" />
          <h2 className="text-2xl font-black text-gray-900 mb-10">Layanan di Pasar Kebbun</h2>

          <div className="space-y-14">
            {FACILITIES.map((item) => (
              <div
                key={item.number}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${!item.imageLeft ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="relative w-full h-60 rounded-xl overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-4xl font-black text-primary mb-1">{item.number}</p>
                  <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                  <div className="w-8 h-0.5 bg-accent mb-4" />
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas Umum */}
      <section className="w-full py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Kelengkapan" />
          <h2 className="text-2xl font-black text-gray-900 mb-8">Fasilitas Umum</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GENERAL.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center gap-3">
                <Icon className="w-8 h-8 text-primary" />
                <p className="text-sm font-semibold text-gray-700 text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
