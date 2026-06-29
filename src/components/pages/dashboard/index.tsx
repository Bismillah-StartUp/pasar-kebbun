'use client';

import Link from 'next/link';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { MdOutlineRestaurant } from 'react-icons/md';
import {
  NotificationBanner,
  StatsCard,
  KulinerTypeBreakdown,
  LineChart,
  QuickActionCard,
} from '@/components/features/dashboard';
import { useDashboardStats } from '@/hooks/useDashboardStats';
import { ROUTES } from '@/constants/routes';

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];
const Y_AXIS_LABELS = [100, 75, 50, 25, 0];

function buildChartPaths(monthlyAdditions: number[]) {
  const max = Math.max(...monthlyAdditions, 1);
  const points = monthlyAdditions.map((value, index) => {
    const x = (index / (monthlyAdditions.length - 1)) * 1100;
    const y = 220 - (value / max) * 200;
    return { x, y };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L 1100 220 L 0 220 Z`;

  return { linePath, areaPath };
}

export default function DashboardPage() {
  const { stats, isLoading } = useDashboardStats();

  if (isLoading || !stats) {
    return (
      <div className="flex items-center justify-center h-64 text-sm text-slate-400">Memuat data dashboard...</div>
    );
  }

  const totalJenis = stats.makananCount + stats.minumanCount;
  const { linePath, areaPath } = buildChartPaths(stats.monthlyAdditions);

  return (
    <>
      <div className="flex justify-end">
        <Link
          href={ROUTES.USER.HOME}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
        >
          <FiArrowLeft className="w-3.5 h-3.5" />
          Kembali ke Website
        </Link>
      </div>

      <NotificationBanner
        title="Penambahan kuliner baru"
        message="Pasar Kebbun Sumenep"
        timeAgo="5 Hari yang lalu"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatsCard
          label="JUMLAH KULINER"
          value={stats.totalKuliner}
          trendLabel={`+${stats.totalKulinerGrowth} bulan ini`}
        />
        <KulinerTypeBreakdown
          trendLabel={`+${stats.jenisGrowth} bulan ini`}
          items={[
            {
              label: 'Makanan',
              count: stats.makananCount,
              percentage: (stats.makananCount / totalJenis) * 100,
              colorClassName: 'bg-primary',
            },
            {
              label: 'Minuman',
              count: stats.minumanCount,
              percentage: (stats.minumanCount / totalJenis) * 100,
              colorClassName: 'bg-amber-500',
            },
          ]}
        />
      </div>

      <LineChart
        title="Grafik Penambahan Kuliner"
        yAxisLabels={Y_AXIS_LABELS}
        xAxisLabels={MONTH_LABELS}
        areaPath={areaPath}
        linePath={linePath}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickActionCard
          href={ROUTES.ADMIN.KULINER}
          icon={<MdOutlineRestaurant className="w-5 h-5" />}
          title="Kelola Kuliner"
          description={`${stats.totalKuliner} item terdaftar`}
        />
        <QuickActionCard
          href={ROUTES.ADMIN.KULINER_CREATE}
          icon={<FiPlus className="w-5 h-5" />}
          title="Tambah Kuliner"
          description="Tambah data baru"
          variant="primary"
        />
      </div>
    </>
  );
}
