import Image from 'next/image';
import PageHero from '@/components/pages/(user)/partials/PageHero';
import SectionLabel from '@/components/pages/(user)/partials/SectionLabel';

const COIN_IMAGE = '/assets/images/tenants/coins/one.webp';

const COIN_TIERS = [
  {
    denomination: 1,
    rupiah: 'Rp 2.500',
    items: [
      "Dhu'-Bundhu'", "Saot Sabreng", "Lemmet", "Lopes", "Lapis", "Gulali", "Pastel",
      "Kue Nol-Monol", "Onde-Onde", "Es Gabus", "Korket Labu", "Temppe Guring",
      "Geddeng Guring", "Tahu Bengis", "Lumpia Kebbun", "Telor Tepung", "Telor Celleng",
      "Pes-pes", "Silong", "Molen", "Nagesare", "Leppet", "Sabreng Geddeng",
      "Tangguli", "Koceng(korket cengi)", "Jambleng", "Martabak Chabul", "Dasar Guring",
      "Kocor", "Sate Tahu", "Bakpao", "Dhudul Jagung", "Kue Talam",
    ],
  },
  {
    denomination: 2,
    rupiah: 'Rp 5.000',
    items: [
      "Ba'-Daba'", "Katemel", "Kalepon", "Rap Orap", "Pentol Kebbun", "Pentol Goreng",
      "Bothok", "Telur Asin", "Tahu Kocek", "Pisang Rebus", "Kellana Kacang", "Centir",
      "Jindul", "Songkel", "Lanon", "Gethuk", "Apen", "Karopok Orap", "Rojek Pentol",
      "Jamu Sinom", "Puro", "Rojek Camongan", "Tahu Pettis", "Asrep", "Keripik Paru",
      "Karopok Kenduy", "Karopok Pattola",
    ],
  },
  {
    denomination: 3,
    rupiah: 'Rp 7.500',
    items: [
      "Bapel", "Kopcor", "Los-Elos", "Nasi Kowal", "Gettas", "Tajhin", "Ra'-Ora'",
      "Tajhin Rojek", "Tajhin La'-Ola'", "Ja' Iris", "Kaldu Pentol", "Nasi Panggeng",
      "Nasi Kebbun", "Pattola", "Peppek",
    ],
  },
  {
    denomination: 4,
    rupiah: 'Rp 10.000',
    items: [
      "Palotan Pendeng", "Nasi Bai' Delem", "Nasi Tobik Marongg", "Pentol Gepek",
      "Rolade Nasi Pecel", "Nasi Jagung", "Rujak Kebbun", "Soto Kebbun", "Sate Ayam",
      "Campor", "Soto Babat", "Kalsot", "Soto Sabreng", "Tajin Nol-Konol", "Nasi Daun Jeruk",
    ],
  },
];

const COIN_POSITIONS: Record<number, string[]> = {
  1: ['top-0 left-1/2 -translate-x-1/2'],
  2: ['top-0 left-0', 'top-0 left-14 sm:left-20'],
  3: ['top-0 left-0', 'top-0 left-14 sm:left-20', 'top-12 left-7 sm:top-16 sm:left-10'],
  4: [
    'top-0 left-0', 'top-0 left-14 sm:left-20',
    'top-12 left-0 sm:top-16 sm:left-0', 'top-12 left-14 sm:top-16 sm:left-20',
  ],
};

function CoinCluster({ count }: { count: number }) {
  const positions = COIN_POSITIONS[count] ?? COIN_POSITIONS[1];
  return (
    <div className="relative w-32 h-32 sm:w-44 sm:h-44">
      {positions.map((position, index) => (
        <div key={index} className={`absolute w-24 h-24 sm:w-28 sm:h-28 ${position}`}>
          <Image src={COIN_IMAGE} alt="Koin Pasar Kebbun" fill className="object-contain" />
        </div>
      ))}
    </div>
  );
}

export default function TenantsPage() {
  return (
    <div className="w-full bg-white">
      <PageHero
        image="/assets/images/tenants/heads/head_one.webp"
        title="UMKM"
      />

      {/* Intro */}
      <section className="w-full py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Produk Lokal Unggulan" />
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            Mendukung Pedagang Lokal Berkembang
          </h2>
          <p className="text-sm text-gray-500 max-w-3xl leading-relaxed">
            Para tenant yang berjualan di pasar kebbun merupakan masyarakat sekitar yang direkomendasikan oleh pemerintah desa saroka dan anak-anak muda yang direkomendasikan oleh hipmi sumenep berjumlah 24 tenant.
          </p>
        </div>
      </section>

      {/* Daftar Harga */}
      <section className="w-full py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-12">
            Daftar Harga Kuliner UMKM
          </h2>

          <div>
            {COIN_TIERS.map((tier, tierIndex) => (
              <div
                key={tier.denomination}
                className={`flex flex-col sm:flex-row gap-8 items-start py-8 ${
                  tierIndex > 0 ? 'border-t border-gray-100' : ''
                }`}
              >
                <div className="shrink-0 w-32 sm:w-44 flex justify-center sm:justify-start">
                  <CoinCluster count={tier.denomination} />
                </div>
                <div>
                  <p className="text-sm font-black text-accent uppercase tracking-widest mb-3">
                    {tier.denomination} Koin / {tier.rupiah} Bisa Dapat:
                  </p>
                  <div className="flex flex-wrap gap-x-2 gap-y-2">
                    {tier.items.map((item, index) => (
                      <span key={`${tier.denomination}-${index}`} className="text-sm text-gray-700 before:content-['•'] before:mr-2 before:text-base before:text-accent">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
