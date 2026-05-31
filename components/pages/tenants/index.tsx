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
      "Dhu'-Bundhu'", "Saot Sabreng", "Lemmet", "Lopes", "Lapis", "Gulali", "Pastel", 
      "Kue Nol-Monol", "Onde-Onde", "Es Gabus", "Korket Labu", "Lemmet", "Gulali", 
      "Temppe Guring", "Geddeng Guring", "Tahu Bengis", "Lumpia Kebbun", "Telor Tepung", 
      "Telor Celleng", "Pes-Pes", "Silong", "Molen", "Nagesare", "Leppet", "Sabreng Geddeng", 
      "Saot Sabreng", "Tangguli", "Koceng (Korket Cengi)", "Martabak Cabhul", "Jambleng", 
      "Dadar Guring", "Kocor", "Sate Tahu", "Bakpao", "Dhudul Jagung", "Kue Talam"
    ]
  },
  {
    denomination: 2 as const,
    pricePerCoin: 2500,
    items: [
      "Ba'-Daba'", "Katemel", "Kalepon", "Rap - Orap", "Pentol Kebbun", "Pentol Goreng", 
      "Bothok", "Telur Asin", "Tahu Kocek", "Pisang Rebus", "Kellana Kacang", "Centir", 
      "Jindul", "Songkel", "Lanon", "Gethuk", "Apen", "Karopok Orap", "Rojek Pentol", 
      "Jamu Sinom", "Puro", "Rojek Camongan", "Tahu Pettis", "Asrep", "Keripik Paru", 
      "Karopok Kenduy", "Karopok Pattola"
    ]
  },
  {
    denomination: 3 as const,
    pricePerCoin: 2500,
    items: [
      "Bapel", "Kopcor", "Los-Elos", "Nasi Kowal", "Gettas", "Tajhin Ra'-Ora'", 
      "Tajhin Rojek", "Tajhin La'-Ola'", "Ja' Iris", "Kaldu Pentol", "Nasi Panggeng", 
      "Nasi Kebbun", "Pattola", "Peppek"
    ]
  },
  {
    denomination: 4 as const,
    pricePerCoin: 2500,
    items: [
      "Palotan Pendeng", "Nasi Bal' Delem", "Nasi Tobik Marongg", "Pentol Gepek", 
      "Rolade Nasi Pecel", "Nasi Jagung", "Rujak Kebbun", "Soto Kebbun", "Sate Ayam", 
      "Campor", "Soto Babat", "Kalsot", "Soto Sabreng", "Tajin Nol-Konol", "Nasi Daun Jeruk"
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

      <section className="w-full bg-white py-12 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-green-700">UMKM</h2>
          <p className="text-gray-700 leading-relaxed">
            Para tenant yang berjualan di pasar kebbun merupakan masyarakat sekitar yang direkomendasikan oleh pemerintah desa saroka dan anak-anak muda yang direkomendasikan oleh hipmi sunenep berjumlah 24 tenant.
          </p>
        </div>
      </section>

      {/* Coin Cards Section */}
      <section className="w-full bg-[#fbfbf8] px-4 py-14 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-center text-3xl font-extrabold tracking-tight text-green-700 md:text-4xl">
            Daftar Harga Kuliner UMKM
          </h3>

          <div className="mt-8 max-w-3xl mx-auto divide-y divide-gray-100">
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
