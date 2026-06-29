import type { AdminUser } from '@/types/user.types';

const MOCK_ADMIN_USER: AdminUser = {
  id: '1',
  namaLengkap: 'Admin Pasar Kebbun',
  email: 'admin@pasarkebbun.id',
  username: 'admin',
};

export async function getCurrentAdmin(): Promise<AdminUser> {
  return MOCK_ADMIN_USER;
}

export async function updateAdminProfile(values: Partial<AdminUser>): Promise<AdminUser> {
  // TODO: kirim ke API setelah backend tersedia
  console.log('Update profil admin:', values);
  return { ...MOCK_ADMIN_USER, ...values };
}

export async function login(username: string, password: string): Promise<{ token: string }> {
  // TODO: panggil API auth setelah backend/NextAuth tersedia
  console.log('Login attempt:', { username, password });
  return { token: 'mock-session-token' };
}
