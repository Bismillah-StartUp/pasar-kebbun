'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiChevronLeft, FiTrash2 } from 'react-icons/fi';
import { RiNotification2Line } from 'react-icons/ri';
import Sidebar from '@/components/navigations/dashboards/sidebar';
import Image from 'next/image';
import { BiPencil } from 'react-icons/bi';

export default function DetailKulinerPage() {
  const params = useParams();
  const uuid = params?.uuid;

  // Data dummy yang disesuaikan tepat dengan teks di berkas KULINER VIEW.png
  const culinaryDetail = {
    nama: 'Tajin Sabih',
    jenis: 'Makanan',
    penjelasan: 'Bubur manis tradisional khas Madura, yang unik karena menyajikan beragam bubur (putih, cakelet, mutiara) dan cendil serta jenjet, disiram santan gurih dan saus gula merah, dilengkapi oleh pisang, rasa legit, gurih, dan tekstur beragam, mencerminkan keberagaman dan kekayaan budaya Madura.',
    images: [
      { id: 1, src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500', isUtama: true },
      { id: 2, src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500', isUtama: false },
      { id: 3, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500', isUtama: false },
      { id: 4, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500', isUtama: false },
      { id: 5, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500', isUtama: false },
    ]
  };

  return (
    <div className="flex w-full min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      
      {/* SIDEBAR COMPONENT */}
      <Sidebar />

      {/* Konten Kanan */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* NAVHEADER DENGAN BREADCRUMB */}
        <header className="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between select-none">
          {/* Breadcrumb Kiri */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide">
            <span className="text-slate-400">Kuliner</span>
            <span className="text-slate-300 font-normal">&gt;</span>
            <span className="text-slate-800 font-bold">{culinaryDetail.nama}</span>
          </div>

          {/* Sisi Kanan Header (Notifikasi & Tanggal Aktif) */}
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

        {/* Main Workspace */}
        <main className="p-6 flex flex-col gap-5 max-w-400 w-full mx-auto">
          
          {/* Tombol Kembali ke List */}
          <div className="flex justify-start">
            <Link 
              href="/dashboard/kuliner" 
              className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
            >
              <FiChevronLeft className="w-4 h-4" />
              Kembali ke Kuliner
            </Link>
          </div>

          {/* GRID GALERI FOTO (5 KOLOM PARALEL) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {culinaryDetail.images.map((img) => (
              <div key={img.id} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-slate-100">
                <Image 
                  src={img.src} 
                  alt={`${culinaryDetail.nama} - ${img.id}`} 
                  className="object-cover"
                  width={300}
                  height={300}
                />
                {/* Lencana Foto Utama */}
                {img.isUtama && (
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#035A1A] text-white text-[9px] font-black tracking-widest rounded uppercase shadow-sm">
                    Utama
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* AREA INFORMASI DETAIL FORM (READ-ONLY) */}
          <div className="flex flex-col gap-5 mt-2">
            
            {/* Field 1: Nama Kuliner */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Nama Kuliner
              </label>
              <div className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200/60 rounded-xl text-xs font-bold text-slate-800 shadow-sm select-all">
                {culinaryDetail.nama}
              </div>
            </div>

            {/* Field 2: Jenis Kuliner */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Jenis Kuliner
              </label>
              <div className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200/60 rounded-xl text-xs font-bold text-slate-800 shadow-sm">
                {culinaryDetail.jenis}
              </div>
            </div>

            {/* Field 3: Penjelasan Textarea Box */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Penjelasan
              </label>
              <div className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200/60 rounded-xl text-xs font-medium text-slate-600 leading-relaxed shadow-sm text-justify">
                {culinaryDetail.penjelasan}
              </div>
            </div>

          </div>

          {/* BARIS TOMBOL AKSI UTAMA (HAPUS & EDIT) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mt-2">
            
            {/* Tombol Aksi Hapus (Merah Lembut) */}
            <button className="w-full py-3.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-full flex items-center justify-center gap-2 border border-red-100 transition-all shadow-sm">
              <FiTrash2 className="w-4 h-4" />
              Hapus
            </button>

            {/* Tombol Aksi Edit (Hijau Utama) */}
            <button className="w-full py-3.5 bg-[#035A1A] hover:bg-[#024a15] text-white font-bold text-xs rounded-full flex items-center justify-center gap-2 transition-all shadow-sm">
              <BiPencil className="w-4 h-4" />
              Edit
            </button>

          </div>

        </main>
      </div>

    </div>
  );
}