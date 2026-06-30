import type { AdminUser } from '@/types/user.types';

export async function getCurrentAdmin(): Promise<AdminUser | null> {
  const res = await fetch('/api/auth/me');
  if (!res.ok) return null;
  const json = await res.json();
  return json.data ?? null;
}

export async function updateAdminProfile(
  values: Partial<AdminUser> & { password?: string }
): Promise<AdminUser | null> {
  const res = await fetch('/api/auth/profile', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.data ?? null;
}
