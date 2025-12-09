import type { Metadata } from "next";
import ChartsSection from "./components/ChartsSection";
import PieCard from "./components/PieCard";
import RecentTable from "./components/RecentTable";
import StatsGrid from "./components/StatsGrid";
import TrafficCard from "./components/TrafficCard";

export const metadata: Metadata = {
  title: "Main Dashboard | Horizon",
  description: "Admin dashboard inspired by Horizon UI",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-slate-500">
          Pages / Main Dashboard
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Main Dashboard
        </h1>
      </div>
      <StatsGrid />
      <ChartsSection />
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentTable />
        </div>
        <div className="grid gap-6">
          <TrafficCard />
          <PieCard />
        </div>
      </div>
    </div>
  );
}
