import Image from 'next/image';
import HeadViews from '@/components/ui/customs/headviews';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const LANDING_IMAGES = [
  '/assets/images/landings/landing_one.png',
  '/assets/images/landings/landing_two.png',
  '/assets/images/landings/landing_three.png',
  '/assets/images/landings/landing_four.png',
  '/assets/images/landings/landing_five.png',
];

export default function AboutSection() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - HeadViews */}
      <section className="w-full">
        <HeadViews images={LANDING_IMAGES} />
      </section>

      {/* Sejarah Pasar Kebbun */}
      <section className="w-full bg-white py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-6">
            Sejarah Pasar Kebbun
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Terbentuknya pasar kebbun bermula dari ide anak muda yang kemudian peduli terhadap tradisi, budaya dan kuliner terdahulu yang hari ini hampir dilupakan, karena maraknya kuliner yang serba instan. Nah dan silulah saya bersama teman-teman melalu teman-teman melilai dan mengonsep, pasar kebbun tersebut dengan nuansa lampau. Dan di launching pada hari 20 Agustus 2025.
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="w-full bg-gray-50 py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-green-700 text-center mb-4">
            Visi Misi
          </h3>
          <p className="text-gray-700 leading-relaxed text-center">
            Visi misi dan tujuan untuk melestariakn tradisi, merawat bumi, dan meningkatkan ekonomi.
          </p>
        </div>
      </section>

      {/* Pengelola */}
      <section className="w-full bg-white py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-green-700 text-center mb-4">
            Pengelola
          </h3>
          <p className="text-gray-700 leading-relaxed text-center">
            Pasar Kebbun Sumenep adalah inisiatif wisata kuliner dan edukasi swasta yang didirikan oleh Fojar Siddiq serta didukong bersama anak-anak muda Desa Saroka dan sektornya.
          </p>
        </div>
      </section>

      {/* Logo dan Filosofi */}
      <section className="w-full bg-gray-50 py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-green-700 text-center mb-8">
            Logo dan Filosofi
          </h3>
          
          <div className="bg-white rounded-lg p-8 mb-8">
            <div className="relative w-full h-96">
              <Image
                src="/assets/images/abouts/filosofi.png"
                alt="Logo Pasar Kebbun"
                width={50}
                height={50}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-green-700 mb-4">FILOSOFI LOGO</h4>
            <p className="text-gray-700 leading-relaxed">
              Pasar Kebbun merepresentasikan harmoni antara budaya, alam, dan tradisi. Logo kami menggambarkan sambungan antara alam yang hijau dan deklaratif simbol ui hujan yang megah. Setiap elemen di dalam logo menunjukan komitmen untuk melestarikan budaya tradisional yang adi luhung.
            </p>
          </div>
        </div>
      </section>

      {/* Kontak Kami */}
      <section className="w-full bg-white py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-green-700 text-center mb-8">
            Kontak Kami
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Instagram */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-green-700 flex items-center justify-center mb-4">
                <FaInstagram className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-700 mb-2">Instagram</h4>
              <p className="text-gray-700 text-center mb-4">pasarkebbun</p>
              <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors">
                Lihat Detail
              </button>
            </div>

            {/* TikTok */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-green-700 flex items-center justify-center mb-4">
                <FaTiktok className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-700 mb-2">Tik Tok</h4>
              <p className="text-gray-700 text-center mb-4">pasarkebbun</p>
              <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors">
                Lihat Detail
              </button>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-green-700 flex items-center justify-center mb-4">
                <FaWhatsapp className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-700 mb-2">WhatsApp</h4>
              <p className="text-gray-700 text-center mb-4">087773300978</p>
              <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
