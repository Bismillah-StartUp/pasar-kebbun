import { cn } from '@/lib/utils';

interface TabsProps<T extends string> {
  tabs: readonly T[];
  active: T;
  onChange: (tab: T) => void;
  className?: string;
}

export function Tabs<T extends string>({ tabs, active, onChange, className }: TabsProps<T>) {
  return (
    <div className={cn('flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-fit', className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={cn(
            'px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer',
            active === tab ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
