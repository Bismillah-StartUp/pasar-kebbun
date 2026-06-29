export interface DashboardStats {
  totalKuliner: number;
  totalKulinerGrowth: number;
  makananCount: number;
  minumanCount: number;
  jenisGrowth: number;
  monthlyAdditions: number[];
}

const MOCK_DASHBOARD_STATS: DashboardStats = {
  totalKuliner: 25,
  totalKulinerGrowth: 17,
  makananCount: 20,
  minumanCount: 5,
  jenisGrowth: 21,
  monthlyAdditions: [2, 4, 6, 8, 10, 9, 12, 15, 17, 20, 23, 25],
};

export async function getDashboardStats(): Promise<DashboardStats> {
  return MOCK_DASHBOARD_STATS;
}
