import { FiTrendingUp } from 'react-icons/fi';
import { Card } from '@/components/ui';

interface BreakdownItem {
  label: string;
  count: number;
  percentage: number;
  colorClassName: string;
}

interface KulinerTypeBreakdownProps {
  items: BreakdownItem[];
  trendLabel: string;
}

export function KulinerTypeBreakdown({ items, trendLabel }: KulinerTypeBreakdownProps) {
  return (
    <Card className="flex flex-col justify-between min-h-[160px]">
      <div>
        <span className="text-[11px] font-bold tracking-wider text-slate-400 block mb-4">JENIS KULINER</span>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <span className="text-slate-600 font-medium w-20">{item.label}</span>
              <div className="flex-1 mx-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.colorClassName}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="font-bold text-slate-800 w-4 text-right">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1 text-[11px] font-bold text-success mt-2">
        <FiTrendingUp className="w-3.5 h-3.5" />
        <span>{trendLabel}</span>
      </div>
    </Card>
  );
}
