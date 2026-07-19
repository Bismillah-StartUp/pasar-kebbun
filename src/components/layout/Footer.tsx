import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlinePhone } from 'react-icons/hi';
import { ROUTES } from '@/constants/routes';

const HALAMAN_LINKS = [
  { label: 'Beranda', href: ROUTES.USER.HOME },
  { label: 'Kuliner', href: ROUTES.USER.KULINER },
  { label: 'Berita', href: ROUTES.USER.BERITA },
  { label: 'UMKM', href: ROUTES.USER.UMKM },
  { label: 'Event', href: ROUTES.USER.EVENT },
  { label: 'Fasilitas', href: ROUTES.USER.FASILITAS },
  { label: 'Tentang Kami', href: ROUTES.USER.ABOUT },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Kolom 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center shrink-0">
                <Image
                  src="/assets/icons/logo-pk-white.png"
                  alt="Pasar Kebbun"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">PASAR KEBBUN</p>
                <p className="text-accent text-[11px] font-semibold leading-tight">Wisata Kuliner, Budaya, dan Alam</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Ruang publik yang memadukan nilai tradisional dengan nuansa alam, mendukung UMKM lokal dan melestarikan budaya daerah.
            </p>
            <div className="flex items-center gap-2">
              <Link href="https://instagram.com/pasarkebbun" target="_blank" aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link href="https://wa.me/6287713300678" target="_blank" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaWhatsapp className="w-4 h-4" />
              </Link>
              <Link href="https://tiktok.com/@pasarkebbun" target="_blank" aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaTiktok className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Kolom 2 — Halaman */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-accent mb-4">Halaman</h4>
            <ul className="space-y-2.5">
              {HALAMAN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                    <span className="text-accent text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 — Kontak */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-accent mb-4">Kontak</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-white/80">
                <HiOutlineLocationMarker className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Desa Saroka, Kec. Saronggi, Kabupaten Sumenep, Jawa Timur</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/80">
                <HiOutlineClock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Setiap Minggu 06.00–14.00 WIB<br />Setiap Malam Bulan Purnama 17.00–23.00 WIB</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/80">
                <FaInstagram className="w-4 h-4 text-accent shrink-0" />
                <span>@pasarkebbun</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/80">
                <HiOutlinePhone className="w-4 h-4 text-accent shrink-0" />
                <span>087713300678</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Pasar Kebbun. Seluruh hak cipta dilindungi.</p>
          <Link href={ROUTES.ADMIN.LOGIN}
            className="text-xs font-semibold text-white/70 hover:text-white transition-colors shrink-0">
            Login Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
