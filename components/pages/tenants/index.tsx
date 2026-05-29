import HeadViews from '@/components/ui/customs/headviews';
import CoinCard from '@/components/ui/customs/coin-card';

const TENANT_IMAGES = [
  '/assets/images/tenants/heads/head_one.png',
  '/assets/images/tenants/heads/head_two.png',
  '/assets/images/tenants/heads/head_three.png',
  '/assets/images/tenants/heads/head_four.png',
  '/assets/images/tenants/heads/head_five.png',
];

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
      'Ba\'Daba',
      'Katemel',
      'Kalepon',
      'Rap - Orap',
      'Pentol Kebbun',
      'Pentol Goreng',
      'Botok Tahu',
      'Tahu Kocak',
      'Piguol Rebus',
      'Kellana Kacang',
      'Centir',
      'Jindul Songkel',
      'Lanon',
      'Gethuk',
      'Apen',
      'Koropok Orap',
      'Rojek Pentol',
      'Jamu Sinom',
      'Puro',
      'Rojek Camongan',
      'Tahu Pettis',
      'Asrep',
      'Keripik Paru',
      'Karopok Kenduy',
      'Karopok Pattola'
    ]
  },
  {
    denomination: 3 as const,
    pricePerCoin: 2500,
    items: [
      'Bapel',
      'Kopcor',
      'Los-Elos',
      'Nasi Kowal',
      'Gettas',
      'Tajhin Ra\'Ora',
      'Tajhin Rojek',
      'Tajhin La\'Ola',
      'Ja\'iris',
      'Kaldu Pentol',
      'Nasi Panggeng',
      'Nasi Kebbun',
      'Pattola',
      'Peppep'
    ]
  },
  {
    denomination: 4 as const,
    pricePerCoin: 2500,
    items: [
      'Palotan Pendeng',
      'Nasi Bal Dalam',
      'Nasi Tobik Marongg',
      'Pentol Gepek',
      'Rolade Nasi Pecel',
      'Nasi Jagung',
      'Rujak Kebbun',
      'Soto Kebbun',
      'Sate Ayam',
      'Cangpor',
      'Soto Babat',
      'Kaisat',
      'Soto Sabreng',
      'Tajin Nol-Kono',
      'Nasi Daun Jeruk'
    ]
  }
];

export default function TenantsSection() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Carousel */}
      <section className="w-full">
        <HeadViews images={TENANT_IMAGES} />
      </section>

      {/* UMKM Description Section */}
      <section className="w-full bg-white py-12 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-green-700">UMKM</h2>
          <p className="text-gray-700 leading-relaxed">
            Para tenant yang berjualan di pasar kebbun merupakan masyarakat sekitar yang direkomendasikan oleh pemerintah desa saroka dan anak-anak muda yang direkomendasikan oleh hipmi sunenep berjumlah 24 tenant.
          </p>
        </div>
      </section>

      {/* Coin Cards Section */}
      <section className="w-full bg-gray-50 py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-2 text-center text-3xl font-bold text-green-700">
            Daftar Harga Kuliner UMKM
          </h3>
          <p className="mb-8 text-center text-gray-600">
            Pilih nominal koin yang sesuai untuk berbelanja kuliner dari UMKM Pasar Kebbun
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
    </div>
  );
}
