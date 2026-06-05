'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiPlus, FiTrash2, FiLink } from 'react-icons/fi';
import { RiNotification2Line } from 'react-icons/ri';
import Sidebar from '@/components/navigations/dashboards/sidebar';
import { BiPencil } from 'react-icons/bi';
import Image from 'next/image';

const INITIAL_NEWS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    title: 'UMKM Lokal Pasar Kebbun Tembus Pasar Nasional',
    url: 'https://example.com/berita/umkm-lokal',
    date: '12 Mei 2026',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    title: 'UMKM Lokal Pasar Kebbun Tembus Pasar Nasional',
    url: 'https://example.com/berita/umkm-lokal',
    date: '12 Mei 2026',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    title: 'UMKM Lokal Pasar Kebbun Tembus Pasar Nasional',
    url: 'https://example.com/berita/umkm-lokal',
    date: '12 Mei 2026',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    title: 'UMKM Lokal Pasar Kebbun Tembus Pasar Nasional',
    url: 'https://example.com/berita/umkm-lokal',
    date: '12 Mei 2026',
  },
];

export default function BeritaPage() {
  const [newsList, setNewsList] = useState(INITIAL_NEWS);

  const handleDelete = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
      setNewsList(newsList.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        
        <header className="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between select-none">
          <h1 className="text-sm font-bold text-slate-800 tracking-wide">Berita</h1>
          
          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full relative transition-colors">
              <RiNotification2Line className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full border border-white"></span>
            </button>
            <div className="px-4 py-2 bg-white border border-slate-100 text-xs font-bold text-slate-500 rounded-full shadow-sm">
              28 Mei 2026
            </div>
          </div>
        </header>

        <main className="p-6 flex flex-col gap-4 max-w-400 w-full mx-auto">
          
          {/* Header Konten: Judul & Tombol Tambah Berita */}
          <div className="flex items-center justify-between mt-2 select-none">
            <div>
              <h2 className="text-base font-black text-slate-800 tracking-tight">
                Daftar Berita
              </h2>
              <p className="text-[11px] font-bold text-slate-400 mt-0.5">
                {newsList.length} berita tersedia
              </p>
            </div>

            {/* Tombol Tambah Berita */}
            <Link 
              href="/dashboard/berita/create" 
              className="flex items-center gap-1.5 px-4 py-2 bg-[#035A1A] hover:bg-[#024d16] text-white font-bold text-xs rounded-full shadow-sm transition-all whitespace-nowrap"
            >
              <FiPlus className="w-4 h-4" />
              Tambah Berita
            </Link>
          </div>

          {/* TABLE CONTAINER CARD */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden mt-2">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-white select-none">
                    <th className="px-6 py-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase w-[15%]">Foto</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase w-[40%]">Judul</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase w-[25%]">Link</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase w-[12%]">Tanggal</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase text-center w-[8%]">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {newsList.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/40 transition-colors">
                      
                      {/* Kolom 1: Foto Thumbnail */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-28 h-16 rounded-xl overflow-hidden shadow-sm bg-slate-100">
                          <Image
                            src={item.image} 
                            alt="Berita Thumbnail" 
                            className="w-full h-full object-cover"
                            width={400}
                            height={400}
                          />
                        </div>
                      </td>

                      {/* Kolom 2: Judul Berita */}
                      <td className="px-6 py-4">
                        <p className="text-xs font-black text-slate-800 leading-relaxed max-w-sm">
                          {item.title}
                        </p>
                      </td>

                      {/* Kolom 3: Link Eksternal */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                        >
                          <FiLink className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate max-w-50">{item.url}</span>
                        </a>
                      </td>

                      {/* Kolom 4: Tanggal */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xs font-bold text-slate-400">
                          {item.date}
                        </span>
                      </td>

                      {/* Kolom 5: Tombol Aksi (Edit & Hapus) */}
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center gap-2">
                          {/* Tombol Edit */}
                          <Link
                            href={`/dashboard/berita/edit/${item.id}`}
                            className="p-1.5 bg-green-50 hover:bg-green-100 text-emerald-600 rounded-full transition-colors"
                            title="Edit Berita"
                          >
                            <BiPencil className="w-3.5 h-3.5" />
                          </Link>

                          {/* Tombol Hapus */}
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-full transition-colors"
                            title="Hapus Berita"
                          >
                            <FiTrash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State Fallback jika data kosong */}
            {newsList.length === 0 && (
              <div className="py-12 text-center text-xs font-medium text-slate-400">
                Belum ada berita tersedia. Klik &quot;Tambah Berita&quot; untuk menambahkan baru.
              </div>
            )}

          </div>

        </main>
      </div>

    </div>
  );
}