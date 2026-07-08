'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getDashboardStats, type DashboardStats } from '@/services/dashboard.service';

export function useDashboardStats() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getDashboardStats()
      .then((data) => {
        if (isMounted) setStats(data);
      })
      .catch((err) => {
        if (isMounted) toast.error(err instanceof Error ? err.message : 'Gagal memuat data dashboard.');
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { stats, isLoading };
}
