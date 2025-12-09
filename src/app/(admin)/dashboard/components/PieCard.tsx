"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const pieData = [
  { name: "Your Files", value: 63 },
  { name: "System", value: 25 },
  { name: "Other", value: 12 },
];

const colors = ["#6b66f6", "#2bc5ff", "#cbd5e1"];

export default function PieCard() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-900">Your Pie Chart</p>
          <p className="text-sm text-slate-500">Monthly</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          Monthly
        </span>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={24}
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm text-slate-600">{value}</span>
              )}
            />
            <Pie
              data={pieData}
              cx="50%"
              cy="45%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={4}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-around text-sm font-semibold text-slate-700">
        <div className="flex flex-col items-center gap-1">
          <span className="h-2 w-8 rounded-full bg-[#6b66f6]" />
          <span>Your Files</span>
          <span className="text-xs text-slate-500">63%</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="h-2 w-8 rounded-full bg-[#2bc5ff]" />
          <span>System</span>
          <span className="text-xs text-slate-500">25%</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="h-2 w-8 rounded-full bg-[#cbd5e1]" />
          <span>Other</span>
          <span className="text-xs text-slate-500">12%</span>
        </div>
      </div>
    </section>
  );
}
