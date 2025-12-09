"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "@/components/ThemeProvider";

const performance = [
  { month: "SEP", spend: 32, earned: 28 },
  { month: "OCT", spend: 35, earned: 30 },
  { month: "NOV", spend: 42, earned: 34 },
  { month: "DEC", spend: 38, earned: 36 },
  { month: "JAN", spend: 44, earned: 39 },
  { month: "FEB", spend: 41, earned: 37 },
];

const revenue = [
  { day: "17", desktop: 9, mobile: 7 },
  { day: "18", desktop: 10, mobile: 6 },
  { day: "19", desktop: 11, mobile: 7 },
  { day: "20", desktop: 13, mobile: 8 },
  { day: "21", desktop: 12, mobile: 9 },
  { day: "22", desktop: 14, mobile: 8 },
  { day: "23", desktop: 15, mobile: 9 },
  { day: "24", desktop: 16, mobile: 10 },
  { day: "25", desktop: 17, mobile: 11 },
];

export default function DashboardChartPanel() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const gridColor = isDark ? "#1f2937" : "#eef2ff";
  const tickColor = isDark ? "#cbd5e1" : "#9ca3af";
  const tooltipBorder = isDark ? "#1f2937" : "#e5e7eb";
  const tooltipBg = isDark ? "#0f172a" : "#ffffff";
  const tooltipShadow = isDark
    ? "0 10px 30px rgba(15,23,42,0.45)"
    : "0 10px 30px rgba(0,0,0,0.05)";
  const legendColor = isDark ? "#e2e8f0" : "#0f172a";

  return (
    <section className="grid gap-6 xl:grid-cols-3">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-colors dark:bg-slate-900 dark:ring-slate-800 xl:col-span-2">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              This month
            </p>
            <div className="mt-1 flex items-baseline gap-3">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                $37.5K
              </h2>
              <span className="text-sm font-semibold text-emerald-500">
                +2.45%
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Total spent
            </p>
          </div>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100">
            Performance
          </span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performance} margin={{ left: -20, right: 10 }}>
              <defs>
                <linearGradient id="lineA" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6b66f6" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#6b66f6" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="lineB" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2bc5ff" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#2bc5ff" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke={gridColor} vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: tickColor, fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: tickColor, fontSize: 12 }}
              />
              <Tooltip
                cursor={{ stroke: gridColor }}
                contentStyle={{
                  borderRadius: 12,
                  border: `1px solid ${tooltipBorder}`,
                  boxShadow: tooltipShadow,
                  background: tooltipBg,
                  color: legendColor,
                }}
              />
              <Legend
                verticalAlign="top"
                iconType="circle"
                height={24}
                wrapperStyle={{ paddingBottom: 12, color: legendColor }}
              />
              <Line
                type="monotone"
                dataKey="spend"
                name="Spend"
                stroke="url(#lineA)"
                strokeWidth={4}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              <Line
                type="monotone"
                dataKey="earned"
                name="Earned"
                stroke="url(#lineB)"
                strokeWidth={4}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-colors dark:bg-slate-900 dark:ring-slate-800">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Weekly Revenue
          </h2>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100">
            Live
          </span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenue} barCategoryGap={12}>
              <CartesianGrid stroke={gridColor} vertical={false} />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{ fill: tickColor, fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: tickColor, fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: isDark ? "#111827" : "#f8fafc" }}
                contentStyle={{
                  borderRadius: 12,
                  border: `1px solid ${tooltipBorder}`,
                  boxShadow: tooltipShadow,
                  background: tooltipBg,
                  color: legendColor,
                }}
              />
              <Legend
                verticalAlign="top"
                height={24}
                iconType="circle"
                wrapperStyle={{ color: legendColor }}
              />
              <defs>
                <linearGradient id="barA" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6b66f6" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#6b66f6" stopOpacity={0.4} />
                </linearGradient>
                <linearGradient id="barB" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2bc5ff" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#2bc5ff" stopOpacity={0.4} />
                </linearGradient>
              </defs>
              <Bar
                dataKey="desktop"
                name="Desktop"
                stackId="a"
                fill="url(#barA)"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="mobile"
                name="Mobile"
                stackId="a"
                fill="url(#barB)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
