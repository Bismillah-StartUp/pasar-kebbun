import Image from 'next/image';
import PageHero from '@/components/pages/(user)/partials/PageHero';
import SectionLabel from '@/components/pages/(user)/partials/SectionLabel';

const COIN_TIERS = [
  {
    denomination: 1,
    rupiah: 'Rp 2.500',
    image: '/assets/images/tenants/coins/one.png',
    items: [
      "Dhu'-Bundhu'", "Saot Sabreng", "Lemmet", "Lopes", "Lapis", "Gulali", "Pastel",
      "Kue Nol-Monol", "Onde-Onde", "Es Gabus", "Korket Labu", "Temppe Guring",
      "Geddeng Guring", "Tahu Bengis", "Lumpia Kebbun", "Telor Tepung", "Telor Celleng",
      "Pes-pes", "Silong", "Molen", "Nagesare", "Leppet", "Sabreng Geddeng", "Saot Sabreng",
      "Tangguli", "Koceng(korket cengi)", "Jambleng", "Martabak Chabul", "Dasar Guring",
      "Kocor", "Sate Tahu", "Bakpao", "Dhudul Jagung", "Kue Talam",
    ],
  },
  {
    denomination: 2,
    rupiah: 'Rp 5.000',
    image: '/assets/images/tenants/coins/two.png',
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
    image: '/assets/images/tenants/coins/three.png',
    items: [
      "Bapel", "Kopcor", "Los-Elos", "Nasi Kowal", "Gettas", "Tajhin", "Ra'-Ora'",
      "Tajhin Rojek", "Tajhin La'-Ola'", "Ja' Iris", "Kaldu Pentol", "Nasi Panggeng",
      "Nasi Kebbun", "Pattola", "Peppek",
    ],
  },
  {
    denomination: 4,
    rupiah: 'Rp 10.000',
    image: '/assets/images/tenants/coins/four.png',
    items: [
      "Palotan Pendeng", "Nasi Bai' Delem", "Nasi Tobik Marongg", "Pentol Gepek",
      "Rolade Nasi Pecel", "Nasi Jagung", "Rujak Kebbun", "Soto Kebbun", "Sate Ayam",
      "Campor", "Soto Babat", "Kalsot", "Soto Sabreng", "Tajin Nol-Konol", "Nasi Daun Jeruk",
    ],
  },
];

export default function TenantsPage() {
  return (
    <div className="w-full bg-white">
      <PageHero
        image="/assets/images/tenants/heads/head_one.png"
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
      <section className="w-full py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 text-center mb-10">
            Daftar Harga Kuliner UMKM
          </h2>

          <div className="space-y-10">
            {COIN_TIERS.map((tier) => (
              <div key={tier.denomination} className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <Image
                    src={tier.image}
                    alt={`${tier.denomination} Koin`}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-black text-accent uppercase tracking-widest mb-2">
                    {tier.denomination} Koin / {tier.rupiah} Bisa Dapat:
                  </p>
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {tier.items.map((item) => (
                      <span key={item} className="text-xs text-gray-600 after:content-['•'] after:ml-2 after:text-gray-300 last:after:content-none">
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
