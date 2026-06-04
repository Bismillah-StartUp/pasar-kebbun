'use client';

import NavHeader from '@/components/navigations/dashboards/navheader';
import Sidebar from '@/components/navigations/dashboards/sidebar';
import React from 'react';
import { FiTrendingUp, FiArrowLeft, FiPlus } from 'react-icons/fi';
import { MdOutlineRestaurant } from 'react-icons/md';
import { RiNotification2Line } from 'react-icons/ri';

export default function DashboardPage() {
  return (
    <div className="flex w-full min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      
      {/* 1. COMPONENT SIDEBAR */}
      <Sidebar />

      {/* Konten Kanan (Header + Isi Dashboard) */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* 2. COMPONENT NAVHEADER */}
        <NavHeader />

        {/* Main Workspace */}
        <main className="p-6 flex flex-col gap-6 max-w-[1600px] w-full mx-auto">
          
          {/* Link Kembali ke Website */}
          <div className="flex justify-end">
            <a 
              href="#" 
              className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
            >
              <FiArrowLeft className="w-3.5 h-3.5" />
              Kembali ke Website
            </a>
          </div>

          {/* Banner Alert Notifikasi */}
          <div className="flex items-center justify-between px-5 py-4 bg-amber-50/60 border border-amber-100 rounded-2xl text-sm">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="p-2 bg-amber-100/50 rounded-xl text-amber-600">
                <RiNotification2Line className="w-4 h-4" />
              </div>
              <p>
                <span className="font-bold text-slate-800">Penambahan kuliner baru</span> Pasar Kebbun Sumenep
              </p>
            </div>
            <span className="text-xs text-slate-400 font-medium">5 Hari yang lalu</span>
          </div>

          {/* Grid Stat Cards (Jumlah & Jenis Kuliner) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Jumlah Kuliner */}
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-slate-400 block mb-2">
                  JUMLAH KULINER
                </span>
                <h3 className="text-5xl font-black text-[#0F172A] tracking-tight">25</h3>
              </div>
              <div className="flex justify-end">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 rounded-full text-[11px] font-bold text-[#035A1A]">
                  <FiTrendingUp className="w-3.5 h-3.5" />
                  <span>+17 bulan ini</span>
                </div>
              </div>
            </div>

            {/* Card 2: Jenis Kuliner (Progress Bar) */}
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-slate-400 block mb-4">
                  JENIS KULINER
                </span>
                
                <div className="flex flex-col gap-3">
                  {/* Makanan */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium w-20">Makanan</span>
                    <div className="flex-1 mx-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#035A1A] rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <span className="font-bold text-slate-800 w-4 text-right">20</span>
                  </div>
                  
                  {/* Minuman */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium w-20">Minuman</span>
                    <div className="flex-1 mx-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="font-bold text-slate-800 w-4 text-right">5</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-bold text-[#035A1A] mt-2">
                <FiTrendingUp className="w-3.5 h-3.5" />
                <span>+21 bulan ini</span>
              </div>
            </div>

          </div>

          {/* Grafik Penambahan Kuliner */}
          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 mb-6">Grafik Penambahan Kuliner</h3>
            
            <div className="relative w-full h-64 flex flex-col justify-between">
              {/* Garis Grid Horizontal & Angka Y-Axis */}
              {[100, 75, 50, 25, 0].map((val) => (
                <div key={val} className="flex items-center w-full text-[10px] text-slate-400 font-medium h-0">
                  <span className="w-8 text-left">{val}</span>
                  <div className="flex-1 border-t border-dashed border-slate-100"></div>
                </div>
              ))}

              {/* Lapisan SVG Chart Utama */}
              <div className="absolute inset-0 pl-8 pr-2 pt-1 pb-1">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1100 220">
                  <defs>
                    {/* Efek Gradasi Hijau Lembut */}
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#035A1A" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#035A1A" stopOpacity="0.00" />
                    </linearGradient>
                  </defs>
                  
                  {/* Path Area (Isi Gradasi) */}
                  <path
                    d="M 0 200 Q 100 180 200 150 T 400 100 T 600 110 T 800 65 T 1000 45 L 1100 35 L 1100 220 L 0 220 Z"
                    fill="url(#chart-grad)"
                  />
                  
                  {/* Path Line (Garis Hijau Tebal) */}
                  <path
                    d="M 0 200 Q 100 180 200 150 T 400 100 T 600 110 T 800 65 T 1000 45 L 1100 35"
                    fill="none"
                    stroke="#035A1A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* X-Axis Labels */}
            <div className="flex justify-between pl-8 text-[11px] font-semibold text-slate-400 mt-4 select-none">
              {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'].map((month) => (
                <span key={month} className="w-full text-center">{month}</span>
              ))}
            </div>
          </div>

          {/* Bagian Bawah: Aksi Cepat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card Kelola Kuliner */}
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-between cursor-pointer hover:border-slate-200 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#035A1A]">
                  <MdOutlineRestaurant className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Kelola Kuliner</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">25 item terdaftar</p>
                </div>
              </div>
            </div>

            {/* Card Tambah Kuliner */}
            <div className="p-4 bg-[#035A1A] rounded-2xl shadow-sm flex items-center justify-between cursor-pointer hover:bg-[#024d16] transition-all text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <FiPlus className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Tambah Kuliner</h4>
                  <p className="text-xs text-white/70 font-medium mt-0.5">Tambah data baru</p>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>

    </div>
  );
}