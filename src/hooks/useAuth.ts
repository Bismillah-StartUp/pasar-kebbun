'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login as loginService } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes';

const SESSION_COOKIE_NAME = 'session_token';

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const { token } = await loginService(username, password);
      document.cookie = `${SESSION_COOKIE_NAME}=${token}; path=/`;
      router.push(ROUTES.ADMIN.DASHBOARD);
    } catch {
      setError('Username atau password salah.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    document.cookie = `${SESSION_COOKIE_NAME}=; path=/; max-age=0`;
    router.push(ROUTES.ADMIN.LOGIN);
  };

  return { login, logout, isLoading, error };
}
