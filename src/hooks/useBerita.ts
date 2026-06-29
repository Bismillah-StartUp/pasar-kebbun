'use client';

import { useEffect, useState } from 'react';
import { getBeritaList, deleteBerita } from '@/services/berita.service';
import type { Berita } from '@/types/berita.types';

export function useBerita() {
  const [data, setData] = useState<Berita[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBeritaList()
      .then((response) => setData(response.data))
      .finally(() => setIsLoading(false));
  }, []);

  const removeBerita = async (uuid: string) => {
    await deleteBerita(uuid);
    setData((prev) => prev.filter((item) => item.id !== uuid));
  };

  return { data, isLoading, removeBerita };
}
