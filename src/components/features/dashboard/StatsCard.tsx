import { FiTrendingUp } from 'react-icons/fi';
import { Card } from '@/components/ui';

interface StatsCardProps {
  label: string;
  value: number;
  trendLabel: string;
}

export function StatsCard({ label, value, trendLabel }: StatsCardProps) {
  return (
    <Card className="flex flex-col justify-between min-h-[160px]">
      <div>
        <span className="text-[11px] font-bold tracking-wider text-slate-400 block mb-2">{label}</span>
        <h3 className="text-5xl font-black text-slate-900 tracking-tight">{value}</h3>
      </div>
      <div className="flex justify-end">
        <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 rounded-full text-[11px] font-bold text-success">
          <FiTrendingUp className="w-3.5 h-3.5" />
          <span>{trendLabel}</span>
        </div>
      </div>
    </Card>
  );
}
