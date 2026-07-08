'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import { HiOutlineUpload } from 'react-icons/hi';
import { FiPlus, FiCamera, FiX } from 'react-icons/fi';
import { cn, isImageTooLarge } from '@/lib/utils';

interface UploadedPhoto {
  id: string;
  src: string;
  isPrimary?: boolean;
}

interface FileUploadProps {
  photos: UploadedPhoto[];
  maxFiles: number;
  accept?: string;
  onFilesSelected: (files: FileList) => void;
  onReplacePhoto?: (id: string, file: File) => void;
  onRemovePhoto?: (id: string) => void;
  helperText?: string;
}

export function FileUpload({
  photos,
  maxFiles,
  accept = 'image/jpeg,image/png,image/webp',
  onFilesSelected,
  onReplacePhoto,
  onRemovePhoto,
  helperText = `JPG, PNG, WEBP · Bisa pilih hingga ${maxFiles} foto sekaligus`,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const replaceInputRef = useRef<HTMLInputElement>(null);
  const [replacingId, setReplacingId] = useState<string | null>(null);
  const remainingSlots = maxFiles - photos.length;

  const handleReplaceClick = (id: string) => {
    setReplacingId(id);
    replaceInputRef.current?.click();
  };

  const handleReplaceFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && replacingId && onReplacePhoto) {
      if (isImageTooLarge(file)) {
        toast.warning('Ukuran foto maksimal 5MB.');
      } else {
        onReplacePhoto(replacingId, file);
      }
    }
    setReplacingId(null);
    e.target.value = '';
  };

  const handleFilesSelected = (files: FileList) => {
    const oversized = Array.from(files).some(isImageTooLarge);
    if (oversized) {
      toast.warning('Ukuran foto maksimal 5MB.');
      return;
    }
    onFilesSelected(files);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between select-none">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          {photos.length} / {maxFiles} foto
        </span>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        hidden
        onChange={(e) => e.target.files && handleFilesSelected(e.target.files)}
      />

      {onReplacePhoto && (
        <input ref={replaceInputRef} type="file" accept={accept} hidden onChange={handleReplaceFileChange} />
      )}

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={remainingSlots <= 0}
        className="w-full py-8 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50/50 transition-colors select-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-primary mb-3">
          <HiOutlineUpload className="w-5 h-5" />
        </div>
        <p className="text-xs font-bold text-slate-700 mb-1">Drag & drop atau klik untuk pilih foto</p>
        <p className="text-[10px] font-medium text-slate-400">{helperText}</p>
      </button>

      {photos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-2">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={cn(
                'relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-slate-100',
                onReplacePhoto && 'group cursor-pointer'
              )}
              onClick={onReplacePhoto ? () => handleReplaceClick(photo.id) : undefined}
            >
              <Image src={photo.src} alt="Preview" className="w-full h-full object-cover" width={200} height={200} />
              {photo.isPrimary && (
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-primary text-white text-[9px] font-black tracking-widest rounded uppercase shadow-sm">
                  Utama
                </span>
              )}
              {onReplacePhoto && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <FiCamera className="w-5 h-5 text-white" />
                </div>
              )}
              {onRemovePhoto && photos.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemovePhoto(photo.id);
                  }}
                  aria-label="Hapus foto"
                  className="absolute top-2 right-2 p-1 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-sm transition-colors"
                >
                  <FiX className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}

          {Array.from({ length: Math.max(remainingSlots, 0) }).map((_, index) => (
            <button
              key={`empty-slot-${index}`}
              type="button"
              onClick={() => inputRef.current?.click()}
              className={cn(
                'aspect-square border border-dashed border-emerald-600/40 bg-emerald-50/20 rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-emerald-50/40 transition-colors text-emerald-700 select-none'
              )}
            >
              <div className="p-1 bg-emerald-100/60 rounded-lg text-primary">
                <FiPlus className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold tracking-wide">Foto {photos.length + index + 1}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
