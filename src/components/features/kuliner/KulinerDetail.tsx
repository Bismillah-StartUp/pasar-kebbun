'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { FiTrash2, FiCamera, FiChevronDown, FiX, FiPlus } from 'react-icons/fi';
import { BiPencil } from 'react-icons/bi';
import { cn, isImageTooLarge } from '@/lib/utils';
import type { Kuliner, KulinerJenis } from '@/types/kuliner.types';

export interface KulinerEditValues {
  nama: string;
  jenis: KulinerJenis;
  penjelasan: string;
  hargaKoin: number;
  photos: { existingId?: string; file?: File; src: string; isPrimary: boolean }[];
}

interface KulinerDetailProps {
  kuliner: Kuliner;
  onDelete?: () => void;
  onSave?: (values: KulinerEditValues) => Promise<void>;
  isSaving?: boolean;
}

const fieldClassName =
  'w-full px-4 py-3 bg-slate-50/60 border border-slate-200/60 rounded-xl text-xs font-bold text-slate-800 shadow-sm';

const MAX_PHOTOS = 5;

export function KulinerDetail({ kuliner, onDelete, onSave, isSaving }: KulinerDetailProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [nama, setNama] = useState(kuliner.nama);
  const [jenis, setJenis] = useState<KulinerJenis>(kuliner.jenis);
  const [penjelasan, setPenjelasan] = useState(kuliner.penjelasan);
  const [hargaKoin, setHargaKoin] = useState(kuliner.hargaKoin);
  const [photos, setPhotos] = useState<KulinerEditValues['photos']>(
    kuliner.foto.map((photo) => ({ existingId: photo.id, src: photo.url, isPrimary: photo.isPrimary }))
  );
  const replaceInputRef = useRef<HTMLInputElement>(null);
  const addInputRef = useRef<HTMLInputElement>(null);
  const [replacingIndex, setReplacingIndex] = useState<number | null>(null);

  const handleReplaceClick = (index: number) => {
    if (!isEditing) return;
    setReplacingIndex(index);
    replaceInputRef.current?.click();
  };

  const handleReplaceFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && replacingIndex !== null) {
      if (isImageTooLarge(file)) {
        alert('Ukuran foto maksimal 5MB.');
      } else {
        setPhotos((prev) =>
          prev.map((photo, index) => (index === replacingIndex ? { ...photo, file, src: URL.createObjectURL(file) } : photo))
        );
      }
    }
    setReplacingIndex(null);
    e.target.value = '';
  };

  const handleAddFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const selected = Array.from(files).slice(0, MAX_PHOTOS - photos.length);
      if (selected.some(isImageTooLarge)) {
        alert('Ukuran foto maksimal 5MB.');
      } else {
        const newPhotos = selected.map((file) => ({ src: URL.createObjectURL(file), isPrimary: false, file }));
        setPhotos((prev) => [...prev, ...newPhotos]);
      }
    }
    e.target.value = '';
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos((prev) => {
      const remaining = prev.filter((_, i) => i !== index);
      const hasPrimary = remaining.some((photo) => photo.isPrimary);
      return remaining.map((photo, i) => (!hasPrimary && i === 0 ? { ...photo, isPrimary: true } : photo));
    });
  };

  const handleCancel = () => {
    setNama(kuliner.nama);
    setJenis(kuliner.jenis);
    setPenjelasan(kuliner.penjelasan);
    setHargaKoin(kuliner.hargaKoin);
    setPhotos(kuliner.foto.map((photo) => ({ existingId: photo.id, src: photo.url, isPrimary: photo.isPrimary })));
    setIsEditing(false);
  };

  const handleSave = async () => {
    await onSave?.({ nama, jenis, penjelasan, hargaKoin, photos });
    setIsEditing(false);
  };

  return (
    <>
      <input ref={replaceInputRef} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={handleReplaceFileChange} />
      <input
        ref={addInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        hidden
        onChange={handleAddFiles}
      />

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {!isEditing && photos.length === 0 && (
          <div className="col-span-2 sm:col-span-5 aspect-3/1 rounded-2xl bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-400">
            Tidak ada foto
          </div>
        )}
        {photos.map((photo, index) => (
          <div
            key={photo.existingId ?? index}
            onClick={() => handleReplaceClick(index)}
            className={cn(
              'relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-slate-100',
              isEditing && 'group cursor-pointer'
            )}
          >
            <Image
              src={photo.src}
              alt={`${kuliner.nama} - ${index + 1}`}
              className="object-cover"
              fill
              sizes="(min-width: 640px) 20vw, 50vw"
              priority={index === 0}
            />
            {photo.isPrimary && (
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-primary text-white text-[9px] font-black tracking-widest rounded uppercase shadow-sm">
                Utama
              </span>
            )}
            {isEditing && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <FiCamera className="w-5 h-5 text-white" />
              </div>
            )}
            {isEditing && photos.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemovePhoto(index);
                }}
                aria-label="Hapus foto"
                className="absolute top-2 right-2 p-1 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-sm transition-colors"
              >
                <FiX className="w-3 h-3" />
              </button>
            )}
          </div>
        ))}

        {isEditing &&
          Array.from({ length: Math.max(MAX_PHOTOS - photos.length, 0) }).map((_, index) => (
            <button
              key={`empty-slot-${index}`}
              type="button"
              onClick={() => addInputRef.current?.click()}
              className="aspect-square border border-dashed border-emerald-600/40 bg-emerald-50/20 rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-emerald-50/40 transition-colors text-emerald-700 select-none"
            >
              <div className="p-1 bg-emerald-100/60 rounded-lg text-primary">
                <FiPlus className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold tracking-wide">Foto {photos.length + index + 1}</span>
            </button>
          ))}
      </div>

      <div className="flex flex-col gap-5 mt-2">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Nama Kuliner
          </label>
          {isEditing ? (
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className={cn(fieldClassName, 'focus:outline-none focus:border-slate-400 transition-colors')}
            />
          ) : (
            <div className={cn(fieldClassName, 'select-all')}>{kuliner.nama}</div>
          )}
        </div>

        <div className="space-y-1.5 relative">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Jenis Kuliner
          </label>
          {isEditing ? (
            <div className="relative">
              <select
                value={jenis}
                onChange={(e) => setJenis(e.target.value as KulinerJenis)}
                className={cn(fieldClassName, 'focus:outline-none focus:border-slate-400 transition-colors appearance-none cursor-pointer capitalize')}
              >
                <option value="makanan">Makanan</option>
                <option value="minuman">Minuman</option>
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          ) : (
            <div className={cn(fieldClassName, 'capitalize')}>{kuliner.jenis}</div>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Harga Koin
          </label>
          {isEditing ? (
            <div className="relative">
              <select
                value={hargaKoin}
                onChange={(e) => setHargaKoin(Number(e.target.value))}
                className={cn(fieldClassName, 'focus:outline-none focus:border-slate-400 transition-colors appearance-none cursor-pointer')}
              >
                {[1, 2, 3, 4].map((value) => (
                  <option key={value} value={value}>
                    {value} Koin
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          ) : (
            <div className={fieldClassName}>{kuliner.hargaKoin} Koin</div>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Penjelasan
          </label>
          {isEditing ? (
            <textarea
              rows={4}
              value={penjelasan}
              onChange={(e) => setPenjelasan(e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200/60 rounded-xl text-xs font-medium text-slate-600 leading-relaxed shadow-sm resize-none focus:outline-none focus:border-slate-400 transition-colors"
            />
          ) : (
            <div className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200/60 rounded-xl text-xs font-medium text-slate-600 leading-relaxed shadow-sm text-justify">
              {kuliner.penjelasan}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mt-2">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleCancel}
              disabled={isSaving}
              className="w-full py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold text-xs rounded-full flex items-center justify-center gap-2 border border-slate-200 transition-all shadow-sm disabled:opacity-50"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="w-full py-3.5 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-full flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50"
            >
              {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={onDelete}
              className="w-full py-3.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-full flex items-center justify-center gap-2 border border-red-100 transition-all shadow-sm"
            >
              <FiTrash2 className="w-4 h-4" />
              Hapus
            </button>

            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="w-full py-3.5 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-full flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <BiPencil className="w-4 h-4" />
              Edit
            </button>
          </>
        )}
      </div>
    </>
  );
}
