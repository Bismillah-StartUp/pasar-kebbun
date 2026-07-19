'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FileUpload } from '@/components/ui';
import type { KulinerJenis } from '@/types/kuliner.types';

const MAX_PHOTOS = 5;

export interface KulinerFormPhoto {
  id: string;
  src: string;
  isPrimary?: boolean;
  file?: File;
  existingId?: string;
}

export interface KulinerFormValues {
  nama: string;
  jenis: KulinerJenis | '';
  penjelasan: string;
  hargaKoin: number;
  photos: KulinerFormPhoto[];
}

interface KulinerFormProps {
  initialValues?: Partial<KulinerFormValues>;
  submitLabel: string;
  onSubmit: (values: KulinerFormValues) => void;
}

export function KulinerForm({ initialValues, submitLabel, onSubmit }: KulinerFormProps) {
  const [nama, setNama] = useState(initialValues?.nama ?? '');
  const [jenis, setJenis] = useState<KulinerJenis | ''>(initialValues?.jenis ?? '');
  const [penjelasan, setPenjelasan] = useState(initialValues?.penjelasan ?? '');
  const [hargaKoin, setHargaKoin] = useState(initialValues?.hargaKoin ?? 1);
  const [photos, setPhotos] = useState(initialValues?.photos ?? []);

  const handleFilesSelected = (files: FileList) => {
    const newPhotos = Array.from(files)
      .slice(0, MAX_PHOTOS - photos.length)
      .map((file, index) => ({
        id: `${Date.now()}-${index}`,
        src: URL.createObjectURL(file),
        isPrimary: photos.length === 0 && index === 0,
        file,
      }));
    setPhotos([...photos, ...newPhotos]);
  };

  const handleReplacePhoto = (id: string, file: File) => {
    setPhotos(photos.map((photo) => (photo.id === id ? { ...photo, src: URL.createObjectURL(file), file } : photo)));
  };

  const handleRemovePhoto = (id: string) => {
    const remaining = photos.filter((photo) => photo.id !== id);
    const hasPrimary = remaining.some((photo) => photo.isPrimary);
    setPhotos(remaining.map((photo, index) => (!hasPrimary && index === 0 ? { ...photo, isPrimary: true } : photo)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nama, jenis, penjelasan, hargaKoin, photos });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label htmlFor="nama" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Nama Kuliner
        </label>
        <input
          id="nama"
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan nama kuliner"
          required
          className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors"
        />
      </div>

      <div className="space-y-1.5 relative">
        <label htmlFor="jenis" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Jenis Kuliner
        </label>
        <div className="relative">
          <select
            id="jenis"
            value={jenis}
            onChange={(e) => setJenis(e.target.value as KulinerJenis)}
            required
            className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled hidden>
              Pilih jenis kuliner
            </option>
            <option value="makanan">Makanan</option>
            <option value="minuman">Minuman</option>
          </select>
          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="penjelasan" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Penjelasan
        </label>
        <textarea
          id="penjelasan"
          rows={4}
          value={penjelasan}
          onChange={(e) => setPenjelasan(e.target.value)}
          placeholder="Masukkan penjelasan kuliner"
          required
          className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors resize-none leading-relaxed"
        />
      </div>

      <div className="space-y-1.5 relative">
        <label htmlFor="hargaKoin" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Harga Koin
        </label>
        <div className="relative">
          <select
            id="hargaKoin"
            value={hargaKoin}
            onChange={(e) => setHargaKoin(Number(e.target.value))}
            required
            className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 placeholder-slate-300 transition-colors appearance-none cursor-pointer"
          >
            {[1, 2, 3, 4].map((value) => (
              <option key={value} value={value}>
                {value} Koin
              </option>
            ))}
          </select>
          <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <FileUpload
        photos={photos}
        maxFiles={MAX_PHOTOS}
        onFilesSelected={handleFilesSelected}
        onReplacePhoto={handleReplacePhoto}
        onRemovePhoto={handleRemovePhoto}
      />

      <div className="pt-4">
        <button
          type="submit"
          className="w-full py-3.5 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-full shadow-md transition-all duration-150 tracking-wider text-center cursor-pointer"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
