import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import PageHero from '@/components/pages/(user)/partials/PageHero';
import SectionLabel from '@/components/pages/(user)/partials/SectionLabel';

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <PageHero
        image="/assets/images/landings/landing_three.png"
        title="Tentang Kami"
      />

      {/* Sejarah */}
      <section className="w-full py-15 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Sejarah" />
          <h2 className="text-[36px] leading-11.25 font-bold text-gray-900 mb-4">
            Berawal dari Semangat Melestarikan Budaya Lokal
          </h2>
          <p className="text-[15px] leading-[24.5px] font-normal text-justify text-gray-600">
            Terbentuknya pasar kebbun bermula dari ide anak muda yang kemudian peduli terhadap tradisi, budaya dan kuliner terdahulu yang hari ini hampir dilupakan, karena maraknya kuliner yang serba serbi kekinian. Nah dari situlah saya bersama teman-teman memulai dan mengonsep, pasar kebbun tersebut dengan nuansa lampau. Dan di launching pada tgl 20 april 2025.
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="w-full py-15 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <SectionLabel text="Fondasi Kami" />
          <h2 className="text-[36px] leading-11.25 font-bold text-gray-900 mb-6">Visi &amp; Misi</h2>
          <div className="border border-primary/30 rounded-xl px-8 py-6">
            <p className="text-[25px] leading-normal font-normal text-center text-[#036403]">
              Visi misi dan tujuan untuk melestarikan tradisi, merawat bumi,<br className="hidden md:block" /> dan meningkatkan ekonomi.
            </p>
          </div>
        </div>
      </section>

      {/* Pengelola & Filosofi */}
      <section className="w-full py-15 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 md:gap-10 items-start">
          <div>
            <SectionLabel text="Identitas Brand" />
            <h2 className="text-[36px] leading-11.25 font-bold text-gray-900 mb-4">Pengelola &amp; Filosofi</h2>
            <p className="text-[15px] leading-[24.5px] font-normal text-justify text-gray-600 mb-3">
              Pasar Kebun Sumenep adalah inisiatif wisata kuliner dan edukasi swasta yang didirikan oleh Fajor Siddiq serta dikelola bersama anak-anak muda Desa Saroka dan sekitarnya.
            </p>
            <p className="text-[15px] leading-[24.5px] font-normal text-justify text-gray-600">
              Pasar Kwebbun mencerminkan harmoni antara budaya, alam, dan kearifan lokal, menghadirkan nuansa masa lampau di tengah kebun yang subur dan dikelilingi sumber air, ini bukan hanya pasar, tetapi juga pusat wisata yang menghidupkan kembali warisan budaya dan menciptakan pengalaman autentik bagi setiap pengunjung.
            </p>
          </div>
          <div className="flex justify-center md:justify-end mt-11">
            <Image
              src="/assets/icons/logo-pk-green.png"
              alt="Logo Pasar Kebbun"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="w-full py-15 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Temukan Kami" />
          <h2 className="text-[36px] leading-11.25 font-bold text-gray-900 mb-1">Lokasi Pasar Kebbun</h2>
          <p className="text-[15px] leading-[24.5px] font-normal text-justify text-gray-600 mb-6">Dsn. Mora&apos;an, Desa Saroka, Kecamatan Saronggi, Sumenep, Jawa Timur</p>
          <div className="rounded-xl overflow-hidden border border-gray-200 w-full h-128">
            <iframe
              src="https://www.theasys.io/viewer/BoziQItkHitW5sFYuzvcQqafWNGRQ6/"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section className="w-full py-15 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="Hubungi Kami" />
          <h2 className="text-[36px] leading-11.25 font-bold text-gray-900 mb-8">Kontak Kami</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="https://instagram.com/pasarkebbun" target="_blank"
              className="border border-gray-100 rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <FaInstagram className="w-7 h-7 text-primary" />
              <div>
                <p className="font-bold text-gray-900 text-sm">Instagram</p>
                <p className="text-primary text-xs font-semibold">@pasarkebbun</p>
                <p className="text-xs text-gray-400 mt-1">Update harian, foto, &amp; konten menarik</p>
              </div>
            </Link>

            <Link href="https://tiktok.com/@pasarkebbun" target="_blank"
              className="border border-gray-100 rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <FaTiktok className="w-7 h-7 text-primary" />
              <div>
                <p className="font-bold text-gray-900 text-sm">TikTok</p>
                <p className="text-primary text-xs font-semibold">@pasarkebbun</p>
                <p className="text-xs text-gray-400 mt-1">Video kegiatan, event &amp; kehidupan pasar</p>
              </div>
            </Link>

            <Link href="https://wa.me/6208771330678" target="_blank"
              className="border border-gray-100 rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <FaWhatsapp className="w-7 h-7 text-primary" />
              <div>
                <p className="font-bold text-gray-900 text-sm">WhatsApp</p>
                <p className="text-primary text-xs font-semibold">0877-1330-0678</p>
                <p className="text-xs text-gray-400 mt-1">Pertanyaan &amp; pendaftaran pedagang UMKM</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
