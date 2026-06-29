'use client';

import { useState } from 'react';
import Link from 'next/link';
import SideAuth from './partials/sideauth';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Add forgot password logic here
    console.log('Reset password for:', email);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <div className="flex min-h-screen">
      {/* Side Authentication */}
      <SideAuth />

      {/* Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo untuk mobile */}
          <div className="lg:hidden flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center text-white">
              <span className="text-lg">🏘️</span>
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-900">PASAR KEBBUN</h1>
              <p className="text-xs text-gray-600">PANEL ADMIN</p>
            </div>
          </div>

          {isSubmitted ? (
            /* Success Message */
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Email Terkirim!
                </h1>
                <p className="text-gray-600 mb-2">
                  Kami telah mengirimkan link reset password ke email Anda.
                </p>
                <p className="text-sm text-gray-500">
                  Silakan periksa email dan ikuti instruksi untuk mereset password Anda.
                </p>
              </div>

              <Button
                onClick={() => setIsSubmitted(false)}
                className="w-full h-12 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-colors"
              >
                Reset Lagi
              </Button>

              <div className="text-center">
                <Link
                  href="/login"
                  className="text-sm text-gray-600 hover:text-green-700 transition-colors"
                >
                  Kembali ke Login
                </Link>
              </div>
            </div>
          ) : (
            /* Reset Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Lupa Password?
                </h1>
                <p className="text-gray-500 text-sm">
                  Masukkan email Anda untuk menerima link reset password.
                </p>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="admin@pasarkebbun.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700/10 transition-all"
                  required
                />
              </div>

              {/* Reset Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-colors"
              >
                {isLoading ? 'Memproses...' : 'Kirim Link Reset'}
              </Button>

              {/* Back to Login Link */}
              <div className="text-center">
                <Link
                  href="/login"
                  className="text-sm text-gray-600 hover:text-green-700 transition-colors"
                >
                  Kembali ke Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
