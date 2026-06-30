export interface DashboardStats {
  totalKuliner: number;
  totalKulinerGrowth: number;
  makananCount: number;
  minumanCount: number;
  jenisGrowth: number;
  monthlyAdditions: number[];
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const res = await fetch('/api/dashboard/stats');
  if (!res.ok) throw new Error('Gagal memuat statistik dashboard');
  const json = await res.json();
  return json.data;
}
