import Link from 'next/link';
import { cn } from '@/lib/utils';

interface QuickActionCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'primary';
}

export function QuickActionCard({ href, icon, title, description, variant = 'default' }: QuickActionCardProps) {
  const isPrimary = variant === 'primary';

  return (
    <Link
      href={href}
      className={cn(
        'p-4 rounded-2xl shadow-sm flex items-center justify-between transition-all',
        isPrimary
          ? 'bg-primary hover:bg-primary-light text-white'
          : 'bg-white border border-slate-100 hover:border-slate-200'
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center',
            isPrimary ? 'bg-white/10' : 'bg-green-50 text-primary'
          )}
        >
          {icon}
        </div>
        <div>
          <h4 className={cn('text-sm font-bold', isPrimary ? 'text-white' : 'text-slate-800')}>{title}</h4>
          <p className={cn('text-xs font-medium mt-0.5', isPrimary ? 'text-white/70' : 'text-slate-400')}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
