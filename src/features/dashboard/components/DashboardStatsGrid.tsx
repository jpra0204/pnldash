import type { ReactNode } from "react";
import {
  ArrowUpRightIcon,
  BanknotesIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import DashboardStatCard from "./DashboardStatCard";

export type Stat = {
  label: string;
  value: string;
  subValue?: string;
  trend?: string;
  accent?: string;
  icon: ReactNode;
};

const defaultStats: Stat[] = [
  {
    label: "Earnings",
    value: "$340.50",
    subValue: "This month",
    trend: "+4.5%",
    accent: "from-indigo-500 to-blue-500",
    icon: <BanknotesIcon className="h-5 w-5" />,
  },
  {
    label: "Spend this month",
    value: "$642.39",
    trend: "-2.1%",
    accent: "from-blue-500 to-cyan-500",
    icon: <ArrowUpRightIcon className="h-5 w-5" />,
  },
  {
    label: "Sales",
    value: "$574.34",
    trend: "+1.8%",
    accent: "from-purple-500 to-indigo-500",
    icon: <ChartBarIcon className="h-5 w-5" />,
  },
  {
    label: "New Tasks",
    value: "145",
    subValue: "Open",
    accent: "from-indigo-500 to-blue-600",
    icon: <ClipboardDocumentListIcon className="h-5 w-5" />,
  },
  {
    label: "Total Projects",
    value: "$2,433",
    subValue: "Balance",
    accent: "from-blue-600 to-cyan-500",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    label: "Active Users",
    value: "2,579",
    subValue: "Visitors",
    accent: "from-indigo-500 to-blue-700",
    icon: <UsersIcon className="h-5 w-5" />,
  },
];

export default function DashboardStatsGrid({
  stats = defaultStats,
}: {
  stats?: Stat[];
}) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => (
        <DashboardStatCard key={stat.label} {...stat} />
      ))}
    </section>
  );
}
