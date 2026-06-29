'use client';

import CoinCard from '@/components/ui/customs/coin-card';

const coinData = [
  {
    denomination: 1 as const,
    pricePerCoin: 2500,
    items: [
      'Dhu\'Bundhu',
      'Saot Sabreng',
      'Lemmet',
      'Lopes',
      'Lapis',
      'Gulali',
      'Pastel',
      'Kue Nol-Monol',
      'Onde-Onde',
      'Es Gabus',
      'Korket Labu',
      'Jampoe Guring',
      'Geddeng Guring',
      'Tahu Bengis',
      'Lumpia Kebbun',
      'Telor Tepung',
      'Telor Celleng',
      'Pes-Pes',
      'Silong',
      'Molen',
      'Nagesare',
      'Leppet',
      'Sabreng Geddeng',
      'Tangguli',
      'Koceng',
      'Martabak Cabihul',
      'Jamblena',
      'Dadar Guring',
      'Kocor',
      'Sate Tahu',
      'Bakpao',
      'Dhudul Jagung',
      'Kue Dalam'
    ]
  },
  {
    denomination: 2 as const,
    pricePerCoin: 2500,
    items: [
      'Dhu\'Bundhu',
      'Saot Sabreng',
      'Lemmet',
      'Lopes',
      'Lapis',
      'Gulali',
      'Pastel',
      'Kue Nol-Monol',
      'Onde-Onde',
      'Es Gabus',
      'Korket Labu',
      'Jampoe Guring',
      'Geddeng Guring',
      'Tahu Bengis',
      'Lumpia Kebbun',
      'Telor Tepung',
      'Telor Celleng',
      'Pes-Pes',
      'Silong',
      'Molen',
      'Nagesare',
      'Leppet',
      'Sabreng Geddeng',
      'Tangguli',
      'Koceng',
      'Martabak Cabihul',
      'Jamblena',
      'Dadar Guring',
      'Kocor',
      'Sate Tahu',
      'Bakpao',
      'Dhudul Jagung',
      'Kue Dalam'
    ]
  },
  {
    denomination: 3 as const,
    pricePerCoin: 2500,
    items: [
      'Dhu\'Bundhu',
      'Saot Sabreng',
      'Lemmet',
      'Lopes',
      'Lapis',
      'Gulali',
      'Pastel',
      'Kue Nol-Monol',
      'Onde-Onde',
      'Es Gabus',
      'Korket Labu',
      'Jampoe Guring',
      'Geddeng Guring',
      'Tahu Bengis',
      'Lumpia Kebbun',
      'Telor Tepung',
      'Telor Celleng',
      'Pes-Pes',
      'Silong',
      'Molen',
      'Nagesare',
      'Leppet',
      'Sabreng Geddeng',
      'Tangguli',
      'Koceng',
      'Martabak Cabihul',
      'Jamblena',
      'Dadar Guring',
      'Kocor',
      'Sate Tahu',
      'Bakpao',
      'Dhudul Jagung',
      'Kue Dalam'
    ]
  },
  {
    denomination: 4 as const,
    pricePerCoin: 2500,
    items: [
      'Dhu\'Bundhu',
      'Saot Sabreng',
      'Lemmet',
      'Lopes',
      'Lapis',
      'Gulali',
      'Pastel',
      'Kue Nol-Monol',
      'Onde-Onde',
      'Es Gabus',
      'Korket Labu',
      'Jampoe Guring',
      'Geddeng Guring',
      'Tahu Bengis',
      'Lumpia Kebbun',
      'Telor Tepung',
      'Telor Celleng',
      'Pes-Pes',
      'Silong',
      'Molen',
      'Nagesare',
      'Leppet',
      'Sabreng Geddeng',
      'Tangguli',
      'Koceng',
      'Martabak Cabihul',
      'Jamblena',
      'Dadar Guring',
      'Kocor',
      'Sate Tahu',
      'Bakpao',
      'Dhudul Jagung',
      'Kue Dalam'
    ]
  }
];

export default function CoinsSection() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-amber-900">
          Koin Pasar Kebbun
        </h2>
        <p className="mb-8 text-center text-gray-600">
          Pilih nominal koin yang sesuai untuk berbelanja di Pasar Kebbun
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coinData.map((coin) => (
            <CoinCard
              key={coin.denomination}
              denomination={coin.denomination}
              pricePerCoin={coin.pricePerCoin}
              items={coin.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
