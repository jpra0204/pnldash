import type { ReactNode } from "react";
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type LineChartProps = {
  data: Record<string, unknown>[];
  xKey: string;
  lines: { dataKey: string; color: string; name?: string }[];
  height?: number;
  gridColor?: string;
  tickColor?: string;
};

export default function LineChart({
  data,
  xKey,
  lines,
  height = 240,
  gridColor = "#e5e7eb",
  tickColor = "#9ca3af",
}: LineChartProps) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} margin={{ left: -16, right: 8 }}>
          <CartesianGrid stroke={gridColor} vertical={false} />
          <XAxis
            dataKey={xKey}
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
              border: `1px solid ${gridColor}`,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          />
          {lines.map((line) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.color}
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5, strokeWidth: 0 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
