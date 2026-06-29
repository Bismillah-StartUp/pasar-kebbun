import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'p-6 bg-card border border-border rounded-2xl shadow-sm',
        onClick && 'cursor-pointer hover:border-slate-200 transition-all',
        className
      )}
    >
      {children}
    </div>
  );
}
