'use client';

import Link from 'next/link';
import { toast } from 'sonner';
import { FiPlus, FiEye, FiTrash2 } from 'react-icons/fi';
import { Tabs, SearchBar, DataTable, Pagination, Badge } from '@/components/ui';
import type { DataTableColumn } from '@/components/ui/DataTable';
import { useKuliner, type KulinerTabFilter } from '@/hooks/useKuliner';
import { ROUTES } from '@/constants/routes';
import type { Kuliner } from '@/types/kuliner.types';

const TAB_OPTIONS: readonly KulinerTabFilter[] = ['Semua', 'Makanan', 'Minuman'];

export default function KulinerListPage() {
  const { data, total, totalPages, isLoading, activeTab, setActiveTab, search, setSearch, page, goToPage, removeKuliner } =
    useKuliner();

  const handleDelete = async (uuid: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus kuliner ini?')) return;
    try {
      await removeKuliner(uuid);
      toast.success('Kuliner berhasil dihapus.');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Gagal menghapus kuliner.');
    }
  };

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
          <button
            type="button"
            onClick={() => handleDelete(item.id)}
            className="p-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg transition-colors"
            aria-label="Hapus"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
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

        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-slate-400">
            Menampilkan{' '}
            <span className="text-slate-700 font-semibold">
              {total === 0 ? 0 : (page - 1) * 7 + 1}–{Math.min(page * 7, total)}
            </span>{' '}
            dari <span className="text-slate-700 font-semibold">{total}</span> data
          </p>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={goToPage} />
        </div>
      </div>
    </>
  );
}
