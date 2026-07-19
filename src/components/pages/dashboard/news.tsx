'use client';

import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { FiTrash2, FiLink } from 'react-icons/fi';
import { BiPencil } from 'react-icons/bi';
import { DataTable } from '@/components/ui';
import type { DataTableColumn } from '@/components/ui/DataTable';
import { AddBeritaMenu } from '@/components/features/berita';
import { useBerita } from '@/hooks/useBerita';
import { ROUTES } from '@/constants/routes';
import { formatDate } from '@/lib/utils';
import type { Berita } from '@/types/berita.types';

export default function NewsListPage() {
  const { data, isLoading, removeBerita } = useBerita();

  const handleDelete = async (uuid: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus berita ini?')) return;
    try {
      await removeBerita(uuid);
      toast.success('Berita berhasil dihapus.');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Gagal menghapus berita.');
    }
  };

  const columns: DataTableColumn<Berita>[] = [
    {
      key: 'gambar',
      header: 'Foto',
      className: 'w-[15%]',
      render: (item) => (
        <div className="relative w-28 h-16 rounded-xl overflow-hidden shadow-sm bg-slate-100">
          <Image src={item.gambar} alt={item.judul} className="object-cover" fill />
        </div>
      ),
    },
    {
      key: 'judul',
      header: 'Judul',
      className: 'w-[40%]',
      render: (item) => <p className="text-xs font-black text-slate-800 leading-relaxed max-w-sm">{item.judul}</p>,
    },
    {
      key: 'link',
      header: 'Sumber',
      className: 'w-[25%] whitespace-nowrap',
      render: (item) =>
        item.tipe === 'manual' ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent">
            <BiPencil className="w-3.5 h-3.5 shrink-0" />
            Admin Pasar Kebbun
          </span>
        ) : (
          <a
            href={item.link ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <FiLink className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate max-w-50">{item.link}</span>
          </a>
        ),
    },
    {
      key: 'tanggal',
      header: 'Tanggal',
      className: 'w-[12%] whitespace-nowrap',
      render: (item) => <span className="text-xs font-bold text-slate-400">{formatDate(item.tanggal)}</span>,
    },
    {
      key: 'aksi',
      header: 'Aksi',
      className: 'w-[8%] text-center',
      render: (item) => (
        <div className="flex items-center justify-center gap-2">
          <Link
            href={ROUTES.ADMIN.NEWS_DETAIL(item.id)}
            className="p-1.5 bg-green-50 hover:bg-green-100 text-emerald-600 rounded-full transition-colors"
            title="Edit Berita"
          >
            <BiPencil className="w-3.5 h-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => handleDelete(item.id)}
            className="p-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-full transition-colors"
            title="Hapus Berita"
          >
            <FiTrash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between mt-2 select-none">
        <div>
          <h2 className="text-base font-black text-slate-800 tracking-tight">Daftar Berita</h2>
          <p className="text-[11px] font-bold text-slate-400 mt-0.5">{data.length} berita tersedia</p>
        </div>

        <AddBeritaMenu />
      </div>

      <DataTable
        columns={columns}
        data={data}
        rowKey={(item) => item.id}
        emptyMessage={
          isLoading ? 'Memuat data...' : 'Belum ada berita tersedia. Klik "Tambah Berita" untuk menambahkan baru.'
        }
      />
    </>
  );
}
