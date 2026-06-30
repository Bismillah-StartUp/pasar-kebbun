'use client';

import { useEffect, useState } from 'react';
import { getCurrentAdmin, updateAdminProfile } from '@/services/auth.service';
import type { AdminUser } from '@/types/user.types';

export function useAdminProfile() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentAdmin()
      .then(setUser)
      .finally(() => setIsLoading(false));
  }, []);

  const updateProfile = async (values: Partial<AdminUser> & { password?: string }) => {
    const updated = await updateAdminProfile(values);
    setUser(updated);
  };

  return { user, isLoading, updateProfile };
}
