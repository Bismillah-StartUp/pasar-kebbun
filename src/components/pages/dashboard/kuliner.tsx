'use client';

import Link from 'next/link';
import { FiPlus, FiEye } from 'react-icons/fi';
import { BiSolidPencil } from 'react-icons/bi';
import { Tabs, SearchBar, DataTable, Pagination, Badge } from '@/components/ui';
import type { DataTableColumn } from '@/components/ui/DataTable';
import { useKuliner, type KulinerTabFilter } from '@/hooks/useKuliner';
import { ROUTES } from '@/constants/routes';
import type { Kuliner } from '@/types/kuliner.types';

const TAB_OPTIONS: readonly KulinerTabFilter[] = ['Semua', 'Makanan', 'Minuman'];

export default function KulinerListPage() {
  const { data, total, totalPages, isLoading, activeTab, setActiveTab, search, setSearch, page, goToPage } =
    useKuliner();

  const columns: DataTableColumn<Kuliner>[] = [
    {
      key: 'nama',
      header: 'Nama',
      className: 'w-1/4 font-bold text-slate-800 whitespace-nowrap',
      render: (item) => item.nama,
    },
    {
      key: 'jenis',
      header: 'Jenis',
      className: 'w-1/6 whitespace-nowrap',
      render: (item) => <Badge variant="success">{item.jenis === 'makanan' ? 'Makanan' : 'Minuman'}</Badge>,
    },
    {
      key: 'penjelasan',
      header: 'Penjelasan',
      className: 'w-2/5 text-xs font-medium text-slate-500 max-w-xs truncate',
      render: (item) => item.penjelasan,
    },
    {
      key: 'aksi',
      header: 'Aksi',
      className: 'w-1/6 text-right whitespace-nowrap',
      render: (item) => (
        <div className="inline-flex items-center gap-2">
          <Link
            href={ROUTES.ADMIN.KULINER_DETAIL(item.id)}
            className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-lg transition-colors"
            aria-label="Lihat detail"
          >
            <FiEye className="w-4 h-4" />
          </Link>
          <Link
            href={ROUTES.ADMIN.KULINER_DETAIL(item.id)}
            className="p-1.5 bg-amber-50 hover:bg-amber-100 text-amber-500 rounded-lg transition-colors"
            aria-label="Edit"
          >
            <BiSolidPencil className="w-4 h-4" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
        <Tabs tabs={TAB_OPTIONS} active={activeTab} onChange={setActiveTab} />

        <div className="flex items-center gap-3">
          <SearchBar value={search} onChange={setSearch} placeholder="Cari kuliner..." className="w-full sm:w-64" />

          <Link
            href={ROUTES.ADMIN.KULINER_CREATE}
            className="flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-full shadow-sm transition-all whitespace-nowrap"
          >
            <FiPlus className="w-4 h-4" />
            Tambah Kuliner
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <DataTable
          columns={columns}
          data={data}
          rowKey={(item) => item.id}
          emptyMessage={isLoading ? 'Memuat data...' : 'Belum ada data kuliner'}
        />

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={goToPage} />

        <p className="text-xs font-medium text-slate-400">
          Menampilkan <span className="text-slate-700 font-semibold">{data.length}</span> dari{' '}
          <span className="text-slate-700 font-semibold">{total}</span> data
        </p>
      </div>
    </>
  );
}
