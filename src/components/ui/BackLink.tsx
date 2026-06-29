import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

interface BackLinkProps {
  href: string;
  label?: string;
}

export function BackLink({ href, label = 'Kembali' }: BackLinkProps) {
  return (
    <Link href={href} className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
      <FiChevronLeft className="w-4 h-4" />
      {label}
    </Link>
  );
}
