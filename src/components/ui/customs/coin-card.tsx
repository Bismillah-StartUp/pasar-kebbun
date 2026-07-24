'use client';

import Image from 'next/image';

export interface CoinCardProps {
  denomination: 1 | 2 | 3 | 4;
  pricePerCoin: number;
  items: string[];
}

export default function CoinCard({ denomination, pricePerCoin, items }: CoinCardProps) {
  const totalPrice = pricePerCoin * denomination;
  const coinImage = `/assets/images/tenants/coins/${['one', 'two', 'three', 'four'][denomination - 1]}.webp`;
  
  // Format mata uang sesuai dengan "Rp 2.500,00"
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalPrice);

  return (
    <div className="flex flex-row items-start gap-6 py-6 border-b border-gray-100 last:border-0 md:gap-10">
      {/* Kolom Kiri: Gambar Koin & Info Harga */}
      <div className="flex flex-col items-center justify-center w-30 sm:w-37.5 shrink-0 text-center">
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28">
          <Image
            src={coinImage}
            alt={`${denomination} Coin`}
            fill
            className="object-contain"
            sizes="(min-width: 640px) 112px, 80px"
          />
        </div>

        <div className="mt-2 text-[#15803d] font-bold text-xs sm:text-sm md:text-base leading-tight">
          <p>{denomination} Koin</p>
          <p className="mt-0.5">/ Rp {formattedPrice}</p>
        </div>
      </div>

      {/* Kolom Kanan: Daftar Kuliner */}
      <div className="flex-1 pt-2 sm:pt-4">
        <p className="text-[#166534] font-medium text-[13px] sm:text-sm md:text-[15px] leading-relaxed text-left">
          {items.join(', ')}
        </p>
      </div>
    </div>
  );
}