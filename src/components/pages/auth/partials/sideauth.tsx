export default function SideAuth() {
  return (
    <div className="hidden lg:flex w-1/2 bg-linear-to-br from-green-700 to-green-800 flex-col justify-between p-8 text-white">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
          <span className="text-xl font-bold">🏘️</span>
        </div>
        <div>
          <h1 className="text-lg font-bold">PASAR KEBBUN</h1>
          <p className="text-xs text-green-200">PANEL ADMIN</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-5xl font-bold mb-2">Halo,</h2>
          <h2 className="text-5xl font-bold mb-6">Admin! 👋</h2>
          <p className="text-green-100 text-base leading-relaxed">
            Kelola data kuliner, pantau perkembangan pasar, dan perbarui informasi
            Pasar Kebbun dengan mudah dari sini.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div>
        <p className="text-xs text-green-200">© 2024 Pasar Kebbun. All rights reserved.</p>
      </div>
    </div>
  );
}
