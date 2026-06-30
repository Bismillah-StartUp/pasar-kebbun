'use client';

import { useEffect, useState } from 'react';
import { getBeritaByUuid } from '@/services/berita.service';
import type { Berita } from '@/types/berita.types';

export function useBeritaDetail(uuid: string) {
  const [berita, setBerita] = useState<Berita | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getBeritaByUuid(uuid).then((res) => {
      if (isMounted) {
        setBerita(res.data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [uuid]);

  return { berita, isLoading };
}
