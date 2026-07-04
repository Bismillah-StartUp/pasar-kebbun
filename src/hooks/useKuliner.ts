'use client';

import { useEffect, useState } from 'react';
import { getKulinerList, deleteKuliner } from '@/services/kuliner.service';
import type { Kuliner } from '@/types/kuliner.types';
import { useDebounce } from './useDebounce';
import { usePagination } from './usePagination';

export type KulinerTabFilter = 'Semua' | 'Makanan' | 'Minuman';

const PER_PAGE = 7;

export function useKuliner() {
  const [activeTab, setActiveTab] = useState<KulinerTabFilter>('Semua');
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Kuliner[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { page, goToPage } = usePagination();
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const jenis = activeTab === 'Semua' ? undefined : activeTab === 'Makanan' ? 'makanan' : 'minuman';

    getKulinerList({ jenis, search: debouncedSearch, page, perPage: PER_PAGE })
      .then((response) => {
        setData(response.data);
        setTotal(response.pagination.total);
        setTotalPages(response.pagination.totalPages);
      })
      .finally(() => setIsLoading(false));
  }, [activeTab, debouncedSearch, page]);

  const removeKuliner = async (uuid: string) => {
    await deleteKuliner(uuid);
    setData((prev) => prev.filter((item) => item.id !== uuid));
    setTotal((prev) => prev - 1);
  };

  return {
    data,
    total,
    totalPages,
    isLoading,
    activeTab,
    setActiveTab,
    search,
    setSearch,
    page,
    goToPage: (targetPage: number) => goToPage(targetPage, totalPages),
    removeKuliner,
  };
}
