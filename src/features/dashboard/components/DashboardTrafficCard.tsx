"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { useTheme } from "@/components/ThemeProvider";

const trafficData = [
  { time: "08", visitors: 900 },
  { time: "10", visitors: 1200 },
  { time: "12", visitors: 1800 },
  { time: "14", visitors: 1600 },
  { time: "16", visitors: 2200 },
  { time: "18", visitors: 1900 },
];

export default function DashboardTrafficCard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const gridColor = isDark ? "#1f2937" : "#eef2ff";
  const tickColor = isDark ? "#cbd5e1" : "#9ca3af";
  const tooltipBorder = isDark ? "#1f2937" : "#e5e7eb";
  const tooltipBg = isDark ? "#0f172a" : "#ffffff";

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-colors dark:bg-slate-900 dark:ring-slate-800">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Daily Traffic
          </p>
          <p className="text-3xl font-semibold text-slate-900 dark:text-white">
            2,579
          </p>
          <p className="text-xs font-medium text-emerald-500">Visitors</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100">
          +2.45%
        </span>
      </div>
      <div className="mt-4 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trafficData} barSize={18}>
            <CartesianGrid stroke={gridColor} vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tick={{ fill: tickColor, fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: isDark ? "#111827" : "#f8fafc" }}
              contentStyle={{
                borderRadius: 12,
                border: `1px solid ${tooltipBorder}`,
                boxShadow: isDark
                  ? "0 10px 30px rgba(15,23,42,0.45)"
                  : "0 10px 30px rgba(0,0,0,0.05)",
                background: tooltipBg,
                color: isDark ? "#e2e8f0" : "#0f172a",
              }}
            />
            <defs>
              <linearGradient id="trafficBar" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6b66f6" stopOpacity={0.95} />
                <stop offset="100%" stopColor="#6b66f6" stopOpacity={0.45} />
              </linearGradient>
            </defs>
            <Bar
              dataKey="visitors"
              radius={[8, 8, 0, 0]}
              fill="url(#trafficBar)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
