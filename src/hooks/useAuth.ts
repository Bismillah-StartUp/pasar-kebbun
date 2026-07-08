'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
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

  const login = async (username: string, password: string) => {
    setIsLoading(true);

    try {
      const res = await fetch(API_AUTH.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const json = await res.json();

      if (!res.ok) {
        toast.error(json.message ?? 'Login gagal.');
        return;
      }

      setUser(json.data);
      toast.success('Berhasil masuk.');
      router.push(ROUTES.ADMIN.DASHBOARD);
    } catch {
      toast.error('Terjadi kesalahan. Silakan coba lagi.');
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

  return { login, logout, isLoading };
}
