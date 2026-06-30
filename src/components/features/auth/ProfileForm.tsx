'use client';

import { useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import { BiPencil } from 'react-icons/bi';
import type { AdminUser } from '@/types/user.types';

interface ProfileFormProps {
  user: AdminUser;
  onSubmit: (values: Pick<AdminUser, 'namaLengkap' | 'email' | 'username'> & { password?: string }) => void;
}

export function ProfileForm({ user, onSubmit }: ProfileFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [namaLengkap, setNamaLengkap] = useState(user.namaLengkap);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState('••••••••');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ namaLengkap, email, username, password: password !== '••••••••' ? password : undefined });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNamaLengkap(user.namaLengkap);
    setEmail(user.email);
    setUsername(user.username);
    setPassword('••••••••');
    setIsEditing(false);
  };

  const fieldClass = (editing: boolean) =>
    `w-full px-4 py-3 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 transition-colors focus:outline-none ${
      editing
        ? 'bg-white focus:border-slate-400'
        : 'bg-slate-50/50 cursor-default'
    }`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Avatar + nama + username */}
      <div className="flex items-center gap-4 pb-2">
        <div className="relative shrink-0">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
            {user.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.avatar} alt={user.namaLengkap} className="w-full h-full object-cover rounded-full" />
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            )}
          </div>
          {isEditing && (
            <button
              type="button"
              className="absolute bottom-0 right-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white shadow"
              aria-label="Ganti foto"
            >
              <FiCamera className="w-3 h-3" />
            </button>
          )}
        </div>
        <div>
          <p className="text-sm font-black text-slate-800">{user.namaLengkap}</p>
          <p className="text-xs font-medium text-slate-400 mt-0.5">@{user.username}</p>
        </div>
      </div>

      {/* Fields */}
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
          className={fieldClass(isEditing)}
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
          className={fieldClass(isEditing)}
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
          className={fieldClass(isEditing)}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="password" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Password
        </label>
        <input
          id="password"
          type={isEditing ? 'text' : 'password'}
          value={password}
          disabled={!isEditing}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => { if (isEditing && password === '••••••••') setPassword(''); }}
          className={fieldClass(isEditing)}
        />
      </div>

      {/* Actions */}
      <div className="pt-2">
        {isEditing ? (
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-full border border-slate-200 transition-all shadow-sm"
            >
              Batal
            </button>
            <button
              type="submit"
              className="w-full py-3.5 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-full transition-all shadow-md"
            >
              Simpan
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="w-full py-3.5 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-full flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <BiPencil className="w-4 h-4" />
            Edit
          </button>
        )}
      </div>
    </form>
  );
}
