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
    <div className="flex flex-col w-full bg-white">
        <section className="w-full">
        <HeadViews images={LANDING_IMAGES} />
      </section>

      <section className="w-full bg-white py-12 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 tracking-wide">
            Sejarah Pasar Kebbun
          </h2>
          <p className="text-green-800 font-medium leading-relaxed text-justify md:text-center text-[15px] sm:text-base">
            Terbentuknya pasar kebbun bermula dari ide anak muda yang kemudian peduli terhadap tradisi, budaya dan kuliner terdahulu yang hari ini hampir dilupakan, karena maraknya kuliner yang serba instan. Nah dan disitulah saya bersama teman-teman mulai dan mengonsep, pasar kebbun tersebut dengan nuansa lampau. Dan dilaunching pada hari 20 Agustus 2025.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-12 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-green-800 mb-4 tracking-wide">
            Visi Misi
          </h3>
          <p className="text-green-800 font-medium leading-relaxed text-center text-[15px] sm:text-base">
            Visi misi dan tujuan untuk melestarikan tradisi, merawat bumi, dan meningkatkan ekonomi.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-12 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-green-800 mb-4 tracking-wide">
            Pengelola
          </h3>
          <p className="text-green-800 font-medium leading-relaxed text-center text-[15px] sm:text-base">
            Pasar Kebbun Sumenep adalah inisiatif wisata kuliner dan edukasi swasta yang didirikan oleh Fajar Siddiq serta didukung bersama anak-anak muda Desa Saroka dan sektornya.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-green-800 text-center mb-8 tracking-wide">
            Logo dan Filosofi
          </h3>
          
          <div className="justify-center flex">
            <Image
              src="/assets/images/abouts/filosofi.png"
              alt="Logo Pasar Kebbun"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-green-800 text-center mb-12 tracking-wide">
            Klik Disini
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            
            <div className="flex flex-col items-center text-center justify-between min-h-50">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-[5px] border-green-800 bg-green-700 flex items-center justify-center mb-3">
                  <FaInstagram className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-0.5">Instagram</h4>
                <p className="text-green-800 font-medium text-sm">@fojarsiddiq</p>
              </div>
              <button className="mt-4 px-6 py-1.5 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-xs uppercase rounded-md transition-all tracking-wider shadow-sm">
                Klik Disini
              </button>
            </div>

            <div className="flex flex-col items-center text-center justify-between min-h-50">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-[5px] border-green-800 bg-green-700 flex items-center justify-center mb-3">
                  <FaTiktok className="w-9 h-9 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-0.5">Tik Tok</h4>
                <p className="text-green-800 font-medium text-sm">@pasarsiddiq</p>
              </div>
              <button className="mt-4 px-6 py-1.5 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-xs uppercase rounded-md transition-all tracking-wider shadow-sm">
                Klik Disini
              </button>
            </div>

            <div className="flex flex-col items-center text-center justify-between min-h-[200px]">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-[5px] border-green-800 bg-green-700 flex items-center justify-center mb-3">
                  <FaWhatsapp className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-0.5">WhatsApp</h4>
                <p className="text-green-800 font-medium text-sm">0813 255 8883</p>
              </div>
              <button className="mt-4 px-6 py-1.5 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-xs uppercase rounded-md transition-all tracking-wider shadow-sm">
                Klik Disini
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}