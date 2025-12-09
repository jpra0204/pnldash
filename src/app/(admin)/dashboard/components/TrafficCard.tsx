"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const trafficData = [
  { time: "08", visitors: 900 },
  { time: "10", visitors: 1200 },
  { time: "12", visitors: 1800 },
  { time: "14", visitors: 1600 },
  { time: "16", visitors: 2200 },
  { time: "18", visitors: 1900 },
];

export default function TrafficCard() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">Daily Traffic</p>
          <p className="text-3xl font-semibold text-slate-900">2,579</p>
          <p className="text-xs font-medium text-emerald-500">Visitors</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
          +2.45%
        </span>
      </div>
      <div className="mt-4 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trafficData} barSize={18}>
            <CartesianGrid stroke="#eef2ff" vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "#f8fafc" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
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
