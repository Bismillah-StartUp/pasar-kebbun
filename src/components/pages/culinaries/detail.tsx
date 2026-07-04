import Image from 'next/image';
import Link from 'next/link';
import { FiChevronLeft, FiArrowRight } from 'react-icons/fi';
import type { Culinary, CulinaryPhoto } from '@prisma/client';
import { ROUTES } from '@/constants/routes';

const KOIN_TO_RUPIAH: Record<number, string> = {
  1: 'Rp 2.500',
  2: 'Rp 5.000',
  3: 'Rp 7.500',
  4: 'Rp 10.000',
};

const TYPE_LABEL: Record<string, string> = { FOOD: 'Makanan', DRINK: 'Minuman' };
const TYPE_COLOR: Record<string, string> = {
  FOOD: 'bg-amber-400 text-white',
  DRINK: 'bg-blue-400 text-white',
};

type CulinaryWithPhotos = Culinary & { photos: CulinaryPhoto[] };

interface KulinerDetailPageProps {
  culinary: CulinaryWithPhotos;
  others: CulinaryWithPhotos[];
}

export default function KulinerDetailPage({ culinary, others }: KulinerDetailPageProps) {
  const mainPhoto = culinary.photos[0];
  const typeLabel = TYPE_LABEL[culinary.type] ?? culinary.type;

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href={ROUTES.USER.KULINER}
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors mb-6"
        >
          <FiChevronLeft className="w-4 h-4" />
          Kembali ke Daftar Kuliner
        </Link>

        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden bg-gray-100 mb-6">
          {mainPhoto ? (
            <Image
              src={mainPhoto.url}
              alt={culinary.name}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1152px, 100vw"
              quality={90}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              Tidak ada foto
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">{culinary.name}</h1>
          <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${TYPE_COLOR[culinary.type] ?? 'bg-gray-400 text-white'}`}>
            {typeLabel}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-accent" />
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Deskripsi</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{culinary.description}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-accent" />
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Harga</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
              <span className="text-2xl">🪙</span>
              <div>
                <p className="text-lg font-black text-accent leading-tight">{culinary.coinPrice} Koin</p>
                <p className="text-xs text-gray-400">({KOIN_TO_RUPIAH[culinary.coinPrice] ?? '-'})</p>
              </div>
            </div>
          </div>
        </div>

        {others.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-0.5 bg-accent" />
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Lainnya</span>
                </div>
                <h2 className="text-lg font-black text-gray-900">{typeLabel} Lainnya</h2>
              </div>
              <Link
                href={ROUTES.USER.KULINER}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-accent hover:text-accent/80 transition-colors"
              >
                Lihat Semua
                <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {others.map((item) => {
                const photo = item.photos[0];
                return (
                  <Link
                    key={item.uuid}
                    href={ROUTES.USER.KULINER_DETAIL(item.slug)}
                    className="flex flex-col rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-full h-32 bg-gray-100">
                      {photo ? (
                        <Image src={photo.url} alt={item.name} fill className="object-cover" sizes="25vw" />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                      <span className={`absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full ${TYPE_COLOR[item.type] ?? 'bg-gray-400 text-white'}`}>
                        {TYPE_LABEL[item.type] ?? item.type}
                      </span>
                    </div>
                    <div className="p-3">
                      <h3 className="font-bold text-gray-900 text-xs mb-1 line-clamp-1">{item.name}</h3>
                      <p className="text-[11px] text-gray-500 line-clamp-2">{item.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
