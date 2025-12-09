"use client";
"use client";

import type { ReactNode } from "react";

type StatCardProps = {
  label: string;
  value: string;
  subValue?: string;
  trend?: string;
  icon: ReactNode;
  accent?: string;
};

export default function StatCard({
  label,
  value,
  subValue,
  trend,
  icon,
  accent = "from-indigo-500 to-blue-500",
}: StatCardProps) {
  const trendPositive = trend?.startsWith("+");

  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60">
      <div className="flex items-center justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white`}>
          {icon}
        </div>
        {trend ? (
          <span
            className={`text-xs font-semibold ${
              trendPositive ? "text-emerald-500" : "text-rose-500"
            }`}
          >
            {trend}
          </span>
        ) : null}
      </div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
        {subValue ? (
          <span className="text-xs font-medium text-slate-400">{subValue}</span>
        ) : null}
      </div>
    </div>
  );
}
