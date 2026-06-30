'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import SideAuth from './partials/sideauth';
import { ROUTES } from '@/constants/routes';

const PASSWORD_STRENGTH_LABELS = ['', 'Lemah', 'Lemah', 'Sedang', 'Kuat', 'Sangat Kuat'] as const;

function getPasswordStrength(password: string): number {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (password.length >= 12) score++;
  return score;
}

const STRENGTH_COLORS = ['', 'bg-red-400', 'bg-red-400', 'bg-amber-400', 'bg-green-400', 'bg-green-500'] as const;

export default function NewPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const strength = getPasswordStrength(password);
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordsMatch) return;
    setIsLoading(true);
    // TODO: panggil API reset password setelah backend tersedia
    console.log('Reset password:', password);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="flex min-h-screen">
      <SideAuth />

      <div className="w-full lg:w-[58%] flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Buat Password Baru</h2>
            <p className="text-slate-400 text-sm font-medium">
              Masukkan password baru untuk akun{' '}
              <span className="font-bold text-slate-800">admin@pasarkebbun.com</span>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Password Baru */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Password Baru
              </label>
              <div className="relative border-b border-slate-200 focus-within:border-primary transition-colors">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password baru"
                  required
                  className="w-full pb-2.5 pt-1 text-sm font-medium text-slate-800 bg-transparent focus:outline-none tracking-wide pr-8"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 bottom-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                </button>
              </div>

              {password.length > 0 && (
                <div className="flex items-center justify-between gap-4 pt-2">
                  <div className="flex-1 grid grid-cols-5 gap-1.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-colors ${i < strength ? STRENGTH_COLORS[strength] : 'bg-slate-100'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 select-none shrink-0">
                    {PASSWORD_STRENGTH_LABELS[strength]}
                  </span>
                </div>
              )}
            </div>

            {/* Konfirmasi Password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Konfirmasi Password
              </label>
              <div className="relative border-b border-slate-200 focus-within:border-primary transition-colors">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ulangi password baru"
                  required
                  className="w-full pb-2.5 pt-1 text-sm font-medium text-slate-800 bg-transparent focus:outline-none tracking-wide pr-8"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-0 bottom-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showConfirmPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                </button>
              </div>
              {confirmPassword.length > 0 && (
                <p className={`text-[11px] font-bold flex items-center gap-1.5 pt-1 ${passwordsMatch ? 'text-emerald-600' : 'text-red-500'}`}>
                  <span>{passwordsMatch ? '✓' : '✗'}</span>
                  {passwordsMatch ? 'Password cocok' : 'Password tidak cocok'}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !passwordsMatch}
              className="w-full py-4 bg-primary hover:bg-primary-light disabled:bg-slate-300 text-white font-bold text-sm rounded-2xl shadow-md transition-all duration-150 tracking-wide mt-4"
            >
              {isLoading ? 'Memproses...' : 'Simpan Password Baru'}
            </button>

            <div className="text-center pt-2">
              <Link
                href={ROUTES.ADMIN.LOGIN}
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
