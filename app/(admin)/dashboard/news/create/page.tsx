'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiChevronLeft, FiLink } from 'react-icons/fi';
import { HiOutlineUpload } from 'react-icons/hi';
import Sidebar from '@/components/navigations/dashboards/sidebar';

export default function TambahBeritaPage() {
  const router = useRouter();
  const [judul, setJudul] = useState('');
  const [linkBerita, setLinkBerita] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Jalankan logika integrasi API di sini
    alert('Berita berhasil ditambahkan!');
    router.push('/dashboard/berita');
  };

  return (
    <div className="flex w-full min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      
      {/* 1. SIDEBAR COMPONENT */}
      <Sidebar />

      {/* Konten Utama Kanan */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Breadcrumb Bar */}
        <div className="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between select-none">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide">
            <span className="text-slate-400">Berita</span>
            <span className="text-slate-300 font-normal">&gt;</span>
            <span className="text-slate-800 font-bold">Tambah Berita</span>
          </div>
        </div>

        {/* Workspace Form */}
        <main className="p-6 flex flex-col gap-4 max-w-400 w-full mx-auto">
          
          {/* Tombol Kembali */}
          <div className="flex justify-start">
            <Link 
              href="/dashboard/berita" 
              className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
            >
              <FiChevronLeft className="w-4 h-4" />
              Kembali ke Daftar Berita
            </Link>
          </div>

          {/* MAIN FORM CARD */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex flex-col gap-6 mt-2">
            
            <h2 className="text-base font-black text-slate-800 tracking-tight select-none">
              Tambah Berita Baru
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Field 1: Judul Berita */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Judul Berita <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Masukkan judul berita"
                  className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors"
                />
              </div>

              {/* Field 2: Link Berita */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Link Berita <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <FiLink className="absolute left-4 w-4 h-4 text-slate-300 pointer-events-none" />
                  <input
                    type="url"
                    required
                    value={linkBerita}
                    onChange={(e) => setLinkBerita(e.target.value)}
                    placeholder="https://contoh.com/berita"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors"
                  />
                </div>
              </div>

              {/* Field 3: Gambar Berita (Drag & Drop Zone) */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Gambar Berita <span className="text-red-500">*</span>
                </label>
                
                <div className="w-full py-10 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50/40 transition-colors select-none">
                  {/* Ikon Upload dalam wadah hijau mint pudar */}
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#035A1A] mb-3">
                    <HiOutlineUpload className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-700 mb-1">
                    Upload gambar berita
                  </p>
                  <p className="text-[10px] font-medium text-slate-400 mb-1">
                    Drag & drop atau klik untuk memilih file
                  </p>
                  <p className="text-[9px] font-medium text-slate-300">
                    PNG, JPG, WEBP hingga 10MB
                  </p>
                </div>
              </div>

              {/* BARIS TOMBOL AKSI (BATAL & TAMBAH) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                
                {/* Tombol Batal */}
                <Link
                  href="/dashboard/berita"
                  className="w-full py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-full border border-slate-200 flex items-center justify-center transition-all shadow-sm text-center"
                >
                  Batal
                </Link>

                {/* Tombol Konfirmasi Tambah Berita */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#035A1A] hover:bg-[#024a15] text-white font-bold text-xs rounded-full flex items-center justify-center transition-all shadow-md tracking-wide text-center"
                >
                  Tambah Berita
                </button>

              </div>

            </form>
          </div>

        </main>
      </div>

    </div>
  );
}