import Image from 'next/image';
import { FiTrash2 } from 'react-icons/fi';
import { BiPencil } from 'react-icons/bi';
import type { Kuliner } from '@/types/kuliner.types';

interface KulinerDetailProps {
  kuliner: Kuliner;
  onDelete?: () => void;
  onEdit?: () => void;
}

export function KulinerDetail({ kuliner, onDelete, onEdit }: KulinerDetailProps) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {kuliner.foto.map((src, index) => (
          <div key={src} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-slate-100">
            <Image src={src} alt={`${kuliner.nama} - ${index + 1}`} className="object-cover" fill />
            {index === 0 && (
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-primary text-white text-[9px] font-black tracking-widest rounded uppercase shadow-sm">
                Utama
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 mt-2">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Nama Kuliner
          </label>
          <div className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200/60 rounded-xl text-xs font-bold text-slate-800 shadow-sm select-all">
            {kuliner.nama}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Jenis Kuliner
          </label>
          <div className="w-full px-4 py-3 bg-slate-50/60 border border-slate-200/60 rounded-xl text-xs font-bold text-slate-800 shadow-sm capitalize">
            {kuliner.jenis}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Penjelasan
          </label>
          <div className="w-full px-4 py-3.5 bg-slate-50/60 border border-slate-200/60 rounded-xl text-xs font-medium text-slate-600 leading-relaxed shadow-sm text-justify">
            {kuliner.penjelasan}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mt-2">
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
          onClick={onEdit}
          className="w-full py-3.5 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-full flex items-center justify-center gap-2 transition-all shadow-sm"
        >
          <BiPencil className="w-4 h-4" />
          Edit
        </button>
      </div>
    </>
  );
}
