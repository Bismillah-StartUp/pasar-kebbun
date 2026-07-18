'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { FiLink } from 'react-icons/fi';
import { HiOutlineUpload } from 'react-icons/hi';
import { ROUTES } from '@/constants/routes';
import { isImageTooLarge } from '@/lib/utils';

export type BeritaTipe = 'link' | 'manual';

export interface BeritaFormValues {
  judul: string;
  tipe: BeritaTipe;
  link: string;
  konten: string;
  gambar?: File;
}

interface BeritaFormProps {
  initialValues?: Partial<BeritaFormValues> & { gambarPreview?: string };
  submitLabel: string;
  onSubmit: (values: BeritaFormValues) => void;
}

export function BeritaForm({ initialValues, submitLabel, onSubmit }: BeritaFormProps) {
  const [judul, setJudul] = useState(initialValues?.judul ?? '');
  const [tipe, setTipe] = useState<BeritaTipe>(initialValues?.tipe ?? 'link');
  const [link, setLink] = useState(initialValues?.link ?? '');
  const [konten, setKonten] = useState(initialValues?.konten ?? '');
  const [gambar, setGambar] = useState<File | undefined>(undefined);
  const [preview, setPreview] = useState<string | undefined>(initialValues?.gambarPreview);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (isImageTooLarge(file)) {
        toast.warning('Ukuran gambar maksimal 5MB.');
      } else {
        setGambar(file);
        setPreview(URL.createObjectURL(file));
      }
    }
    e.target.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ judul, tipe, link, konten, gambar });
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
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Sumber Berita <span className="text-red-500">*</span>
        </label>
        <div className="inline-flex p-1 bg-slate-50/50 border border-slate-200 rounded-full">
          <button
            type="button"
            onClick={() => setTipe('link')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
              tipe === 'link' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Link Eksternal
          </button>
          <button
            type="button"
            onClick={() => setTipe('manual')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
              tipe === 'manual' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Tulis Manual
          </button>
        </div>
      </div>

      {tipe === 'link' ? (
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
      ) : (
        <div className="space-y-1.5">
          <label htmlFor="konten" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Isi Berita <span className="text-red-500">*</span>
          </label>
          <textarea
            id="konten"
            required
            rows={8}
            value={konten}
            onChange={(e) => setKonten(e.target.value)}
            placeholder="Tulis isi berita di sini..."
            className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors resize-y"
          />
        </div>
      )}

      <div className="space-y-1.5">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Gambar Berita {!initialValues && <span className="text-red-500">*</span>}
        </label>

        <input ref={inputRef} type="file" accept="image/png,image/jpeg,image/webp" hidden onChange={handleFileChange} />

        {preview ? (
          <div
            onClick={() => inputRef.current?.click()}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm bg-slate-100 cursor-pointer group"
          >
            <Image src={preview} alt="Preview" className="object-cover" fill />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <HiOutlineUpload className="w-6 h-6 text-white" />
            </div>
          </div>
        ) : (
          <div
            onClick={() => inputRef.current?.click()}
            className="w-full py-10 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50/40 transition-colors select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-primary mb-3">
              <HiOutlineUpload className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-slate-700 mb-1">Upload gambar berita</p>
            <p className="text-[10px] font-medium text-slate-400 mb-1">Drag & drop atau klik untuk memilih file</p>
            <p className="text-[9px] font-medium text-slate-300">PNG, JPG, WEBP hingga 5MB</p>
          </div>
        )}
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
