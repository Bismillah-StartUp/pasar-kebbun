'use client';

import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { FiUploadCloud, FiDownload } from 'react-icons/fi';
import { importKulinerExcel, type ImportKulinerResult } from '@/services/kuliner.service';

interface KulinerImportFormProps {
  onImported: (result: ImportKulinerResult) => void;
}

export function KulinerImportForm({ onImported }: KulinerImportFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ImportKulinerResult | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file?.name ?? null);
    setResult(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const file = inputRef.current?.files?.[0];
    if (!file) {
      toast.warning('Pilih file Excel terlebih dahulu.');
      return;
    }

    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await importKulinerExcel(file);
      setResult(response.data);
      if (response.data.errors.length > 0) {
        toast.warning(`${response.data.created} berhasil, ${response.data.errors.length} baris gagal diimpor.`);
      } else {
        toast.success(`${response.data.created} kuliner berhasil diimpor.`);
      }
      onImported(response.data);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Gagal mengimpor kuliner');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <a
        href="/templates/kuliner-template.xlsx"
        download
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold text-xs rounded-full border border-slate-200 transition-colors"
      >
        <FiDownload className="w-4 h-4" />
        Download Template Excel
      </a>

      <div className="space-y-1.5">
        <label htmlFor="excel-file" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          File Excel (nama, jenis, harga, deskripsi)
        </label>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full py-8 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50/50 transition-colors select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-primary mb-3">
            <FiUploadCloud className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-700 mb-1">
            {fileName ?? 'Klik untuk pilih file Excel'}
          </p>
          <p className="text-[10px] font-medium text-slate-400">.xlsx, .xls, atau .csv</p>
        </button>
        <input
          id="excel-file"
          ref={inputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          hidden
          onChange={handleFileChange}
        />
      </div>

      {result && (
        <div className="p-4 bg-slate-50/60 border border-slate-200/60 rounded-xl space-y-2">
          <p className="text-xs font-bold text-slate-700">{result.created} kuliner berhasil ditambahkan.</p>
          {result.errors.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs font-bold text-red-500">{result.errors.length} baris gagal:</p>
              <ul className="text-[11px] font-medium text-red-500 list-disc list-inside space-y-0.5">
                {result.errors.map((e) => (
                  <li key={e.row}>
                    Baris {e.row}: {e.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-full shadow-md transition-all duration-150 tracking-wider text-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? 'Mengimpor...' : 'Import Excel'}
        </button>
      </div>
    </form>
  );
}
