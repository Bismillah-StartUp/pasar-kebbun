'use client';

import { useEffect, useState } from 'react';
import { getKulinerByUuid } from '@/services/kuliner.service';
import type { Kuliner } from '@/types/kuliner.types';

export function useKulinerDetail(uuid: string) {
  const [kuliner, setKuliner] = useState<Kuliner | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getKulinerByUuid(uuid).then((data) => {
      if (isMounted) {
        setKuliner(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [uuid]);

  return { kuliner, isLoading };
}
