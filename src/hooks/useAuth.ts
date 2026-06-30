'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth.store';
import { ROUTES } from '@/constants/routes';

const API_AUTH = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
} as const;

export function useAuth() {
  const router = useRouter();
  const { setUser, clearUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(API_AUTH.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.message ?? 'Login gagal.');
        return;
      }

      setUser(json.data);
      router.push(ROUTES.ADMIN.DASHBOARD);
    } catch {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch(API_AUTH.LOGOUT, { method: 'POST' });
    } finally {
      clearUser();
      router.push(ROUTES.ADMIN.LOGIN);
    }
  };

  return { login, logout, isLoading, error };
}
