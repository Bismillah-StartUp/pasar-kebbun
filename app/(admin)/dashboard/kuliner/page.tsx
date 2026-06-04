'use client';

import NavHeader from '@/components/navigations/dashboards/navheader';
import Sidebar from '@/components/navigations/dashboards/sidebar';
import { useState } from 'react';
import { BiSolidPencil } from 'react-icons/bi';
import { FiSearch, FiPlus, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Data Mockup sesuai dengan gambar KULINER.png
const INITIAL_DATA = [
  { id: 1, name: 'Tajin Sabih', type: 'Makanan', desc: 'Bubur manis tradisional khas Madura, yang' },
  { id: 2, name: 'Pattola Kawa', type: 'Makanan', desc: 'Jajanan produksi khas Sumenep yang' },
  { id: 3, name: 'Otet', type: 'Makanan', desc: 'Kuliner tradisional langka khas Madura yang' },
  { id: 4, name: 'Otas', type: 'Makanan', desc: 'Kue tradisional yang populer di kalangan' },
  { id: 5, name: 'Kacor', type: 'Makanan', desc: 'Jajanan gorengan khas Madura yang dibuat' },
  { id: 6, name: 'Lopes', type: 'Makanan', desc: 'Jajanan pasar tradisional khas yang terbuat' },
  { id: 7, name: 'Gheddeng Ghoreng', type: 'Makanan', desc: 'Menggunakan pisang yang digoreng dengan' },
];

export default function KulinerPage() {
  const [activeTab, setActiveTab] = useState<'Semua' | 'Makanan' | 'Minuman'>('Semua');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex w-full min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      
      {/* SIDEBAR COMPONENT */}
      <Sidebar />

      {/* Konten Kanan */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* NAVHEADER COMPONENT (Dengan title "Kuliner") */}
        <NavHeader title="Kuliner" />

        {/* Main Workspace */}
        <main className="p-6 flex flex-col gap-5 max-w-400 w-full mx-auto">
          
          {/* Baris Filter, Cari, dan Tambah Data */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
            
            {/* TABS FILTER (Kiri) */}
            <div className="flex items-center gap-2">
              {(['Semua', 'Makanan', 'Minuman'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-150 border ${
                    activeTab === tab
                      ? 'bg-[#035A1A] text-white border-[#035A1A]'
                      : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* INPUT CARI & TOMBOL TAMBAH (Kanan) */}
            <div className="flex items-center gap-3">
              {/* Kolom Pencarian */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Cari kuliner..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 text-xs border border-slate-200 rounded-full focus:outline-none focus:border-slate-400 placeholder-slate-400 text-slate-700 bg-white shadow-sm"
                />
                <FiSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>

              {/* Tombol Tambah Kuliner */}
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#035A1A] hover:bg-[#024d16] text-white font-bold text-xs rounded-full shadow-sm transition-all whitespace-nowrap">
                <FiPlus className="w-4 h-4" />
                Tambah Kuliner
              </button>
            </div>

          </div>

          {/* CONTAINER UTAMA TABEL */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-white">
                    <th className="px-6 py-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase w-1/4">Nama</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase w-1/6">Jenis</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase w-2/5">Penjelasan</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase text-right pr-8 w-1/6">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {INITIAL_DATA.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                      {/* Nama */}
                      <td className="px-6 py-4 text-sm font-bold text-slate-800 whitespace-nowrap">
                        {item.name}
                      </td>
                      
                      {/* Jenis (Badge) */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 bg-green-50 text-[#035A1A] text-[11px] font-bold rounded-full border border-green-100/50">
                          {item.type}
                        </span>
                      </td>
                      
                      {/* Penjelasan */}
                      <td className="px-6 py-4 text-xs font-medium text-slate-500 max-w-xs truncate">
                        {item.desc}
                      </td>
                      
                      {/* Aksi (Tombol Detail & Edit) */}
                      <td className="px-6 py-4 whitespace-nowrap text-right pr-6">
                        <div className="inline-flex items-center gap-2">
                          {/* Tombol Lihat (Detail) */}
                          <button 
                            className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-lg transition-colors"
                            aria-label="View item"
                          >
                            <FiEye className="w-4 h-4" />
                          </button>
                          
                          {/* Tombol Edit */}
                          <button 
                            className="p-1.5 bg-amber-50 hover:bg-amber-100 text-amber-500 rounded-lg transition-colors"
                            aria-label="Edit item"
                          >
                            <BiSolidPencil className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* FOOTER TABEL (PAGINATION) */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-slate-100 bg-white gap-4">
              {/* Keterangan Data */}
              <p className="text-xs font-medium text-slate-400">
                Menampilkan <span className="text-slate-700 font-semibold">1–7</span> dari <span className="text-slate-700 font-semibold">25</span> data
              </p>

              {/* Kontrol Angka Halaman */}
              <div className="flex items-center gap-1.5 select-none">
                {/* Tombol Prev */}
                <button 
                  disabled 
                  className="p-2 border border-slate-200 rounded-xl text-slate-300 bg-white cursor-not-allowed opacity-60"
                >
                  <FiChevronLeft className="w-3.5 h-3.5" />
                </button>

                {/* Angka-angka */}
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-xl border transition-all ${
                      currentPage === page
                        ? 'bg-[#035A1A] text-white border-[#035A1A]'
                        : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Tombol Next */}
                <button 
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="p-2 border border-slate-200 rounded-xl text-slate-500 bg-white hover:bg-slate-50 transition-colors"
                >
                  <FiChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </main>
      </div>

    </div>
  );
}