'use client';

import { create } from 'zustand';

export interface AuthUser {
  uuid: string;
  fullName: string;
  username: string;
  email: string;
  avatarUrl: string | null;
}

interface AuthStore {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
