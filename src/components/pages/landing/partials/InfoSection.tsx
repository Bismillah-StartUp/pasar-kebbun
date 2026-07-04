import Link from 'next/link';
import { HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi';

export default function InfoSection() {
  return (
    <section className="w-full bg-surface py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-5 items-start">
          <div>
            <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase border border-gray-200 bg-white rounded-full inline-block px-3 py-1 mb-2">
              Info Kunjungan
            </p>
            <h2 className="text-2xl leading-8 font-bold text-gray-900">Lokasi &amp;<br />Jam Buka</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <HiOutlineClock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Jam Operasional</p>
                <p className="text-sm font-semibold text-gray-800">Setiap Minggu 06.00–14.00 WIB</p>
                <p className="text-sm font-semibold text-gray-800">Setiap Malam Bulan Purnama 17.00–23.00 WIB</p>
                <Link href={`#`} className="text-xs text-primary font-semibold mt-1 flex items-center gap-1 hover:underline">
                  Lihat <span>›</span>
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <HiOutlineLocationMarker className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">Lokasi</p>
                <p className="text-sm font-semibold text-gray-800">Dsn. Mora&apos;an, Desa Saroka, Kecamatan Saronggi, Sumenep, Jawa Timur</p>
                <Link href={`https://maps.google.com`} target="_blank" className="text-xs text-primary font-semibold mt-1 flex items-center gap-1 hover:underline">
                  Lihat di Peta <span>›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
