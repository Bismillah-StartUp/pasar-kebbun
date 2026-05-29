import HeadViews from '@/components/ui/customs/headviews';
import { Clock, Calendar } from 'lucide-react';

const WEEKLY_IMAGES = [
  '/assets/images/events/weekly/weekly_one.png',
  '/assets/images/events/weekly/weekly_two.png',
  '/assets/images/events/weekly/weekly_three.png',
  '/assets/images/events/weekly/weekly_four.png',
  '/assets/images/events/weekly/weekly_five.png',
  '/assets/images/events/weekly/weekly_six.png',
];

const MONTHLY_IMAGES = [
  '/assets/images/events/monthly/monthly_one.png',
  '/assets/images/events/monthly/monthly_two.png',
  '/assets/images/events/monthly/monthly_three.png',
];

export default function EventsSection() {
  return (
    <div className="flex flex-col w-full">
      {/* Weekly Events Section */}
      <section className="w-full">
        {/* Hero Section - Weekly Carousel */}
        <HeadViews images={WEEKLY_IMAGES} />

        {/* Weekly Event Description */}
        <div className="w-full bg-white py-12 px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-4xl font-bold text-green-700 text-center">
              Event Mingguan
            </h2>
            <p className="text-gray-700 leading-relaxed text-center">
              Setiap hari Minggu, mulai pukul 06.00 hingga 14.00 WIB menghadirkan pertunjukan mingguan di Pasar Kebbun bersifat hiburan seni dan budaya lokal yang disajikan secara bergantian untuk menghubur pengalaman kuliner dengan apresiasi terhadap seni dan budaya lokal Madura, membuat kunjungan terasa lebih hidup dan bernomortalgia.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Events Section */}
      <section className="w-full">
        {/* Hero Section - Monthly Carousel */}
        <HeadViews images={MONTHLY_IMAGES} />

        {/* Monthly Event Description */}
        <div className="w-full bg-white py-12 px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-4xl font-bold text-green-700 text-center">
              Event Bulanan
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              Pasar Kebbun Sumenep saat bulan purnama dikenal dengan acara rani bernama bulan purnama di &ldquo;Pasar Kebbun&rdquo; merupakan edisi khusus yang berbeda dari jadwal pasar pagi. Pasar Purnama diadakan secara insidental atau sesuai jadwal yang diumumkan oleh pengelola, biasanya pada malam hari saat bulan purnama penuh.
            </p>
            <p className="text-gray-700 leading-relaxed text-center">
              Fokus utama menciptakan suasana malam yang romantis dan magis di area pasar dan memberikan pengalaman alternatif bagi pengunjung yang ingin menikimati keindahan alam dan suasana pasar di malam hari, dengan sentuhan budaya lokal yang kental.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Hours & Schedule Section */}
      <section className="w-full bg-gray-50 py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Operating Hours */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-green-700 flex items-center justify-center">
                  <Clock className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">Jam Operasional</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">Setiap Minggu 06:00-14:00 WIB</p>
                <p>Setiap Malam Bulan Purnama</p>
                <p>17:00-23:00 WIB</p>
              </div>
              <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors">
                Lihat Detail
              </button>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-green-700 flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">Jadwal</h3>
              <div className="space-y-2 text-gray-700">
                <p>Informasi update jadwal event terbaru dan aktivitas spesial yang akan datang</p>
              </div>
              <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors">
                Lihat Jadwal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}