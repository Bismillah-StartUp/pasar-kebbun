'use client';

import { useState } from 'react';
import Link from 'next/link';
import SideAuth from './partials/sideauth';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Add login logic here
    console.log('Login attempt:', { username, password });
    
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="flex min-h-screen">
      {/* Side Authentication */}
      <SideAuth />

      {/* Login Form */}
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

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Selamat Datang Kembali!
              </h1>
              <p className="text-gray-500 text-sm">
                Masuk untuk mengelola data Pasar Kebbun.
              </p>
            </div>

            {/* Username Input */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700/10 transition-all"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700/10 transition-all"
                required
              />
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-colors"
            >
              {isLoading ? 'Memproses...' : 'Masuk Sekarang'}
            </Button>

            {/* Forgot Password Link */}
            <div className="text-center">
              <Link
                href="/forgot"
                className="text-sm text-gray-600 hover:text-green-700 transition-colors"
              >
                Lupa Password? Klik di sini
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
