'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
import { HiOutlineUpload } from 'react-icons/hi';
import { ROUTES } from '@/constants/routes';

export interface BeritaFormValues {
  judul: string;
  link: string;
}

interface BeritaFormProps {
  initialValues?: Partial<BeritaFormValues>;
  submitLabel: string;
  onSubmit: (values: BeritaFormValues) => void;
}

export function BeritaForm({ initialValues, submitLabel, onSubmit }: BeritaFormProps) {
  const [judul, setJudul] = useState(initialValues?.judul ?? '');
  const [link, setLink] = useState(initialValues?.link ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ judul, link });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1.5">
        <label htmlFor="judul" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Judul Berita <span className="text-red-500">*</span>
        </label>
        <input
          id="judul"
          type="text"
          required
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          placeholder="Masukkan judul berita"
          className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="link" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Link Berita <span className="text-red-500">*</span>
        </label>
        <div className="relative flex items-center">
          <FiLink className="absolute left-4 w-4 h-4 text-slate-300 pointer-events-none" />
          <input
            id="link"
            type="url"
            required
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://contoh.com/berita"
            className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Gambar Berita <span className="text-red-500">*</span>
        </label>

        <div className="w-full py-10 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50/40 transition-colors select-none">
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-primary mb-3">
            <HiOutlineUpload className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-700 mb-1">Upload gambar berita</p>
          <p className="text-[10px] font-medium text-slate-400 mb-1">Drag & drop atau klik untuk memilih file</p>
          <p className="text-[9px] font-medium text-slate-300">PNG, JPG, WEBP hingga 10MB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <Link
          href={ROUTES.ADMIN.NEWS}
          className="w-full py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-full border border-slate-200 flex items-center justify-center transition-all shadow-sm text-center"
        >
          Batal
        </Link>

        <button
          type="submit"
          className="w-full py-3.5 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-full flex items-center justify-center transition-all shadow-md tracking-wide text-center"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
