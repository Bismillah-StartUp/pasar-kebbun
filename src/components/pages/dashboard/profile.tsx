'use client';

import { Card } from '@/components/ui';
import { ProfileForm } from '@/components/features/auth';
import { useAdminProfile } from '@/hooks/useAdminProfile';

export default function ProfilePage() {
  const { user, isLoading, updateProfile } = useAdminProfile();

  if (isLoading || !user) {
    return <div className="flex items-center justify-center h-64 text-sm text-slate-400">Memuat profil...</div>;
  }

  return (
    <Card className="max-w-lg">
      <h2 className="text-base font-black text-slate-800 tracking-tight mb-6">Profil Admin</h2>
      <ProfileForm user={user} onSubmit={updateProfile} />
    </Card>
  );
}
