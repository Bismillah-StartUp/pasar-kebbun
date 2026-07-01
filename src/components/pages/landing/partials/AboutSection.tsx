import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

const STATS = [
  { value: '1+', label: 'Tahun Berdiri' },
  { value: '15+', label: 'Pedagang UMKM' },
  { value: '400+', label: 'Pengunjung/Minggu' },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden">
          <Image
            src="/assets/images/landings/landing_two.png"
            alt="Pasar Kebbun"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase border border-gray-200 rounded-full inline-block px-3 py-1 mb-4">
            Tentang Kami
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-4">
            Pasar tradisional unik mengusung konsep tempo dulu dengan nuansa tradisional yang kental menjajakan kuliner khas Madura, sistem transaksi tidak menggunakan uang rupiah secara langsung...
          </p>
          <Link
            href={ROUTES.USER.ABOUT}
            className="text-sm text-primary font-semibold flex items-center gap-1 hover:underline mb-8"
          >
            Baca Selengkapnya <span>›</span>
          </Link>

          <div className="flex items-center gap-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
