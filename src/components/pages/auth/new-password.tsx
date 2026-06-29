'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Image from 'next/image';

export default function CreateNewPasswordPage() {
  const [password, setPassword] = useState('12345678');
  const [confirmPassword, setConfirmPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi submit form
    setTimeout(() => {
      setIsLoading(false);
      alert('Password berhasil diperbarui!');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-white font-sans select-none">
      
      {/* ================= PANEL KIRI (SIDE AUTH) ================= */}
      <div className="hidden lg:flex w-[42%] bg-[#035A1A] text-white p-16 flex-col justify-between relative overflow-hidden">
        {/* Ornamen Lingkaran Dekoratif Sesuai Mockup */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full border border-white/10 pointer-events-none"></div>
        <div className="absolute -top-10 -left-10 w-112.5 h-112.5 rounded-full border border-white/5 pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-10 w-150 h-150 rounded-full border border-white/10 pointer-events-none"></div>

        {/* Top Identity */}
        <div className="flex items-center gap-3.5 z-10">
          <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              className="object-contain"
              width={40}
              height={40}
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/100x100/white/035A1A?text=PK";
              }}
            />
          </div>
          <div>
            <h2 className="text-xs font-bold tracking-wider leading-none">PASAR KEBBUN</h2>
            <span className="text-[9px] text-green-300 font-bold tracking-widest block mt-1">PANEL ADMIN</span>
          </div>
        </div>

        {/* Middle Welcoming Text */}
        <div className="max-w-md my-auto z-10">
          <h1 className="text-5xl font-black tracking-tight mb-5 flex items-center gap-3">
            Halo, Admin! <span className="animate-bounce">👋</span>
          </h1>
          <p className="text-sm font-medium text-white/80 leading-relaxed tracking-wide">
            Kelola data kuliner, pantau perkembangan pasar, dan perbarui informasi Pasar Kebbun dengan mudah dari sini.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="text-xs font-medium text-white/40 z-10">
          © 2024 Pasar Kebbun. All rights reserved.
        </div>
      </div>

      {/* ================= PANEL KANAN (FORM) ================= */}
      <div className="w-full lg:w-[58%] flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md">
          
          {/* Logo Fallback Khusus Tampilan Mobile */}
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-[#035A1A] rounded-full flex items-center justify-center text-white text-xs font-bold">
              PK
            </div>
            <div>
              <h1 className="text-xs font-bold text-gray-900 tracking-wider">PASAR KEBBUN</h1>
              <p className="text-[10px] text-gray-500 font-semibold tracking-wide">PANEL ADMIN</p>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
              Buat Password Baru
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              Masukkan password baru untuk akun <span className="font-bold text-slate-800">admin@pasarkebbun.com</span>.
            </p>
          </div>

          {/* Main Action Form */}
          <form onSubmit={handleSubmit} className="space-y-7">
            
            {/* Input 1: Password Baru */}
            <div className="space-y-1.5 relative">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Password Baru
              </label>
              <div className="relative border-b border-slate-200 focus-within:border-[#035A1A] transition-colors">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pb-2.5 pt-1 text-sm font-medium text-slate-800 bg-transparent focus:outline-none tracking-wide"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 bottom-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                </button>
              </div>

              {/* Indikator Kekuatan Password (Sedang) */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="flex-1 grid grid-cols-4 gap-1.5">
                  <div className="h-1 bg-amber-500 rounded-full"></div>
                  <div className="h-1 bg-amber-500 rounded-full"></div>
                  <div className="h-1 bg-amber-500 rounded-full"></div>
                  <div className="h-1 bg-amber-500 rounded-full"></div>
                </div>
                <span className="text-[11px] font-bold text-slate-400 select-none">Sedang</span>
              </div>
            </div>

            {/* Input 2: Konfirmasi Password */}
            <div className="space-y-1.5 relative">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Konfirmasi Password
              </label>
              <div className="relative border-b border-slate-200 focus-within:border-[#035A1A] transition-colors">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pb-2.5 pt-1 text-sm font-medium text-slate-800 bg-transparent focus:outline-none tracking-wide"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-0 bottom-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showConfirmPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                </button>
              </div>

              {/* Notifikasi Validasi Sukses */}
              <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1.5 pt-1">
                <span>✓</span> Password cocok
              </p>
            </div>

            {/* Tombol Simpan */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-[#035A1A] hover:bg-[#024a15] disabled:bg-slate-300 text-white font-bold text-sm rounded-2xl shadow-md transition-all duration-150 tracking-wide mt-4"
            >
              {isLoading ? 'Memproses...' : 'Simpan Password Baru'}
            </button>

            {/* Tombol Kembali */}
            <div className="text-center pt-2">
              <Link
                href="/login"
                className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors tracking-wide"
              >
                Kembali
              </Link>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}