import Image from 'next/image';
import PageHero from '@/components/pages/(user)/partials/PageHero';
import SectionLabel from '@/components/pages/(user)/partials/SectionLabel';
import { HiOutlineClock } from 'react-icons/hi';
import { IoCalendarSharp } from 'react-icons/io5';

export default function EventsPage() {
  return (
    <div className="w-full bg-white">
      <PageHero
        image="/assets/images/events/weekly/weekly_one.png"
        title="Event"
      />

      {/* Info Cards */}
      <section className="w-full py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-xl p-5 flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <HiOutlineClock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Jam Operasional</p>
              <p className="text-sm font-semibold text-gray-800">Setiap Minggu 06.00–14.00 WIB</p>
              <p className="text-sm font-semibold text-gray-800">Setiap Malam Bulan Purnama 17.00–23.00 WIB</p>
            </div>
          </div>
          <div className="border border-gray-100 rounded-xl p-5 flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <IoCalendarSharp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Jadwal</p>
              <p className="text-sm font-semibold text-gray-800">Informasi update jadwal event terbaru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Mingguan */}
      <section className="w-full py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Rutin Setiap Minggu" />
          <h2 className="text-2xl font-black text-gray-900 mb-8">Event Mingguan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-60 rounded-xl overflow-hidden">
              <Image
                src="/assets/images/events/weekly/weekly_one.png"
                alt="Event Mingguan"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Setiap hari Minggu, mulai pukul 06.00 hingga 14.00 WIB menghadirkan pertunjukan mingguan di Pasar Kebbun bersifat hiburan seni dan budaya lokal yang disajikan secara bergantian untuk menghibur pengunjung. Pertunjukan ini untuk memadukan pengalaman wisata kuliner dengan apresiasi terhadap seni dan budaya lokal Madura, membuat kunjungan terasa lebih hidup dan bernostalgia.
            </p>
          </div>
        </div>
      </section>

      {/* Event Bulanan */}
      <section className="w-full py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Rutin Setiap Bulan" />
          <h2 className="text-2xl font-black text-gray-900 mb-8">Event Bulanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <p className="text-sm text-gray-600 leading-relaxed order-2 md:order-1">
              Pasar Kebbun Sumenep saat bulan purnama dikenal dengan acara rutin bernama &ldquo;Bulan Purnama di Pasar Kebbun&rdquo; merupakan edisi khusus yang berbeda dari jadwal pasar pagi. Pasar Poernama diadakan secara insidental atau sesuai jadwal yang diumumkan oleh pengelola, biasanya pada malam saat bulan purnama penuh. Fokus utama menciptakan suasana malam yang romantis dan magis di area pasar dan memberikan pengalaman alternatif bagi pengunjung yang ingin menikmati keindahan alam dan suasana pasar di malam hari, dengan sentuhan budaya lokal yang kental.
            </p>
            <div className="relative w-full h-60 rounded-xl overflow-hidden order-1 md:order-2">
              <Image
                src="/assets/images/events/monthly/monthly_one.png"
                alt="Event Bulanan"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
