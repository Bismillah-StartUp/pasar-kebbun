import type { Metadata } from 'next';
import LoginPage from '@/components/pages/auth/login';

export const metadata: Metadata = {
  title: 'Login Admin',
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return <LoginPage />;
}
