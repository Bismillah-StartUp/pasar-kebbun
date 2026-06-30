import Image from 'next/image';

export default function SideAuth() {
  return (
    <div className="hidden lg:flex w-[42%] flex-col justify-between p-12 text-white relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/images/pasar-bg.jpg"
        alt="Pasar Kebbun"
        fill
        className="object-cover"
        priority
      />

      {/* Green overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none z-10" />
      <div className="absolute -top-12 -left-12 w-105 h-105 rounded-full border border-white/5 pointer-events-none z-10" />
      <div className="absolute -bottom-40 -right-10 w-150 h-150 rounded-full border border-white/10 pointer-events-none z-10" />

      {/* Logo */}
      <div className="flex items-center gap-3.5 z-20 relative">
        <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm shrink-0">
          <Image
            src="/assets/icons/logo-pk-green.png"
            alt="Logo Pasar Kebbun"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-wider leading-none">PASAR KEBBUN</h2>
          <span className="text-[9px] text-green-300 font-bold tracking-widest block mt-1">PANEL ADMIN</span>
        </div>
      </div>

      {/* Welcome text */}
      <div className="max-w-sm my-auto z-20 relative">
        <h1 className="text-5xl font-black tracking-tight mb-5 flex items-center gap-3">
          Halo, Admin! <span>👋</span>
        </h1>
        <p className="text-sm font-medium text-white/80 leading-relaxed">
          Kelola data kuliner, pantau perkembangan pasar, dan perbarui informasi Pasar Kebbun dengan mudah dari sini.
        </p>
      </div>

      {/* Footer */}
      <p className="text-xs font-medium text-white/40 z-20 relative">
        © 2024 Pasar Kebbun. All rights reserved.
      </p>
    </div>
  );
}
