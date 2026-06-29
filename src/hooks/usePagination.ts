'use client';

import { useState } from 'react';

export function usePagination(initialPage = 1) {
  const [page, setPage] = useState(initialPage);

  const goToPage = (targetPage: number, totalPages: number) => {
    setPage(Math.min(Math.max(targetPage, 1), totalPages));
  };

  return { page, setPage, goToPage };
}
