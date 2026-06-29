import { Card } from '@/components/ui';

interface LineChartProps {
  title: string;
  yAxisLabels: number[];
  xAxisLabels: string[];
  areaPath: string;
  linePath: string;
  viewBox?: string;
}

export function LineChart({
  title,
  yAxisLabels,
  xAxisLabels,
  areaPath,
  linePath,
  viewBox = '0 0 1100 220',
}: LineChartProps) {
  return (
    <Card>
      <h3 className="text-sm font-bold text-slate-800 mb-6">{title}</h3>

      <div className="relative w-full h-64 flex flex-col justify-between">
        {yAxisLabels.map((value) => (
          <div key={value} className="flex items-center w-full text-[10px] text-slate-400 font-medium h-0">
            <span className="w-8 text-left">{value}</span>
            <div className="flex-1 border-t border-dashed border-slate-100"></div>
          </div>
        ))}

        <div className="absolute inset-0 pl-8 pr-2 pt-1 pb-1">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox={viewBox}>
            <defs>
              <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.12" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path d={areaPath} fill="url(#chart-grad)" />
            <path d={linePath} fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="flex justify-between pl-8 text-[11px] font-semibold text-slate-400 mt-4 select-none">
        {xAxisLabels.map((label) => (
          <span key={label} className="w-full text-center">
            {label}
          </span>
        ))}
      </div>
    </Card>
  );
}
