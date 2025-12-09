import type { Metadata } from "next";
import DashboardChartPanel from "@/features/dashboard/components/DashboardChartPanel";
import DashboardPieCard from "@/features/dashboard/components/DashboardPieCard";
import DashboardRecentTable from "@/features/dashboard/components/DashboardRecentTable";
import DashboardStatsGrid from "@/features/dashboard/components/DashboardStatsGrid";
import DashboardTrafficCard from "@/features/dashboard/components/DashboardTrafficCard";

export const metadata: Metadata = {
  title: "Main Dashboard | Horizon",
  description: "Admin dashboard inspired by Horizon UI",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Pages / Main Dashboard
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
          Main Dashboard
        </h1>
      </div>
      <DashboardStatsGrid />
      <DashboardChartPanel />
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <DashboardRecentTable />
        </div>
        <div className="grid gap-6">
          <DashboardTrafficCard />
          <DashboardPieCard />
        </div>
      </div>
    </div>
  );
}
