'use client';

import Image from 'next/image';

export interface CoinCardProps {
  denomination: 1 | 2 | 3 | 4;
  pricePerCoin: number;
  items: string[];
}

export default function CoinCard({ denomination, pricePerCoin, items }: CoinCardProps) {
  const totalPrice = pricePerCoin * denomination;
  const coinImage = `/assets/images/tenants/coins/${['one', 'two', 'three', 'four'][denomination - 1]}.png`;

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border border-amber-200 bg-linear-to-b from-amber-50 to-amber-100 p-6 shadow-md hover:shadow-lg transition-shadow">
      {/* Coin Image */}
      <div className="relative h-32 w-32 shrink-0">
        <Image
          src={coinImage}
          alt={`${denomination} Coin`}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Denomination and Price */}
      <div className="text-center">
        <p className="text-sm font-medium text-amber-900">
          {denomination} Koin
        </p>
        <p className="text-2xl font-bold text-amber-900">
          Rp {totalPrice.toLocaleString('id-ID')}
        </p>
      </div>

      {/* Items List */}
      <div className="w-full border-t border-amber-200 pt-4">
        <p className="mb-2 text-xs font-semibold text-amber-900">Dapat dibeli:</p>
        <p className="text-xs leading-relaxed text-amber-800">
          {items.join(', ')}
        </p>
      </div>

      {/* Purchase Button */}
      <button className="w-full rounded-md bg-amber-600 py-2 px-4 font-semibold text-white transition-colors hover:bg-amber-700 active:bg-amber-800">
        Beli
      </button>
    </div>
  );
}
