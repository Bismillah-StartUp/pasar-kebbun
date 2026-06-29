'use client';

import { useState } from 'react';
import type { AdminUser } from '@/types/user.types';

interface ProfileFormProps {
  user: AdminUser;
  onSubmit: (values: Pick<AdminUser, 'namaLengkap' | 'email' | 'username'>) => void;
}

export function ProfileForm({ user, onSubmit }: ProfileFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [namaLengkap, setNamaLengkap] = useState(user.namaLengkap);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ namaLengkap, email, username });
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1.5">
        <label htmlFor="namaLengkap" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Nama Lengkap
        </label>
        <input
          id="namaLengkap"
          type="text"
          value={namaLengkap}
          disabled={!isEditing}
          onChange={(e) => setNamaLengkap(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 transition-colors disabled:opacity-70"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          disabled={!isEditing}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 transition-colors disabled:opacity-70"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="username" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          disabled={!isEditing}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 text-xs font-medium text-slate-700 transition-colors disabled:opacity-70"
        />
      </div>

      <div className="pt-2">
        {isEditing ? (
          <button
            type="submit"
            className="w-full py-3.5 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-full shadow-md transition-all duration-150 tracking-wider text-center"
          >
            Simpan Perubahan
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="w-full py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-full border border-slate-200 transition-all shadow-sm text-center"
          >
            Edit Profil
          </button>
        )}
      </div>
    </form>
  );
}
