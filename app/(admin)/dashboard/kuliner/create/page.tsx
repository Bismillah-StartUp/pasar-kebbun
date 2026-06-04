'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiChevronDown, FiPlus } from 'react-icons/fi';
import { HiOutlineUpload } from 'react-icons/hi'; // Ikon upload yang minimalis
import Sidebar from '@/components/navigations/dashboards/sidebar';
import Image from 'next/image';

export default function TambahKulinerPage() {
  const [jenisKuliner, setJenisKuliner] = useState('');

  // Dummy state gambar untuk mereplikasi visual 4/5 foto yang sudah terunggah di mockup
  const uploadedPhotos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', isPrimary: true },
    { id: 2, src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400', isPrimary: false },
    { id: 3, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', isPrimary: false },
    { id: 4, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400', isPrimary: false },
  ];

  return (
    <div className="flex w-full min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      
      {/* 1. SIDEBAR COMPONENT */}
      <Sidebar />

      {/* Konten Kanan */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Breadcrumb Bar */}
        <div className="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between select-none">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide">
            <span className="text-slate-400">Kuliner</span>
            <span className="text-slate-300 font-normal">&gt;</span>
            <span className="text-slate-800">Tambah Kuliner</span>
          </div>
        </div>

        {/* Main Workspace */}
        <main className="p-6 flex flex-col gap-4 max-w-400 w-full mx-auto">
          
          {/* Tombol Kembali */}
          <div className="flex justify-start">
            <Link 
              href="/dashboard/kuliner" 
              className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
            >
              <FiChevronLeft className="w-4 h-4" />
              Kembali
            </Link>
          </div>

          {/* MAIN FORM CARD CONTAINER */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex flex-col gap-6">

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Field 1: Nama Kuliner */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Nama Kuliner
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama kuliner"
                  className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors"
                />
              </div>

              {/* Field 2: Jenis Kuliner (Custom Styled Select) */}
              <div className="space-y-1.5 relative">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Jenis Kuliner
                </label>
                <div className="relative">
                  <select
                    value={jenisKuliner}
                    onChange={(e) => setJenisKuliner(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled hidden>Pilih jenis kuliner</option>
                    <option value="Makanan">Makanan</option>
                    <option value="Minuman">Minuman</option>
                  </select>
                  <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Field 3: Penjelasan */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Penjelasan
                </label>
                <textarea
                  rows={4}
                  placeholder="Masukkan penjelasan kuliner"
                  className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Field 4: Foto Kuliner Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between select-none">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Foto Kuliner
                  </label>
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider">
                    4 / 5 foto
                  </span>
                </div>

                {/* Drag & Drop Zone Box */}
                <div className="w-full py-8 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50/50 transition-colors select-none">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#035A1A] mb-3">
                    <HiOutlineUpload className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-700 mb-1">
                    Drag & drop atau klik untuk pilih foto
                  </p>
                  <p className="text-[10px] font-medium text-slate-400">
                    JPG, PNG, WEBP · Bisa pilih hingga 5 foto sekaligus
                  </p>
                </div>

                {/* Grid Preview Foto Terunggah (5 Kolom Sesuai Gambar) */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-2">
                  {uploadedPhotos.map((photo) => (
                    <div key={photo.id} className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm bg-slate-100">
                      <Image
                        src={photo.src} 
                        alt="Preview Kuliner" 
                        className="w-full h-full object-cover" 
                        width={200}
                        height={200}
                      />
                      {/* Badge UTAMA untuk foto pertama */}
                      {photo.isPrimary && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#035A1A] text-white text-[9px] font-black tracking-widest rounded uppercase shadow-sm">
                          Utama
                        </span>
                      )}
                    </div>
                  ))}

                  {/* Slot Kosong ke-5 (Foto 5) */}
                  <div className="aspect-square border border-dashed border-emerald-600/40 bg-emerald-50/20 rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-emerald-50/40 transition-colors text-emerald-700 select-none">
                    <div className="p-1 bg-emerald-100/60 rounded-lg text-[#035A1A]">
                      <FiPlus className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wide">Foto 5</span>
                  </div>
                </div>

                {/* Indikator Slider Titik Bawah */}
                <div className="flex items-center gap-1.5 pt-1 select-none">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1 w-4 rounded-full bg-[#035A1A]"></div>
                  ))}
                  <div className="h-1 w-1.5 rounded-full bg-slate-200"></div>
                </div>

              </div>

              {/* Tombol Submit Utama */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#035A1A] hover:bg-[#024a15] text-white text-xs font-bold rounded-full shadow-md transition-all duration-150 tracking-wider text-center"
                >
                  Tambah +
                </button>
              </div>

            </form>
          </div>

        </main>
      </div>

    </div>
  );
}