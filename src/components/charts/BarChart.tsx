import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type BarChartProps = {
  data: Record<string, unknown>[];
  xKey: string;
  bars: { dataKey: string; color: string; name?: string }[];
  height?: number;
  gridColor?: string;
  tickColor?: string;
};

export default function BarChart({
  data,
  xKey,
  bars,
  height = 240,
  gridColor = "#e5e7eb",
  tickColor = "#9ca3af",
}: BarChartProps) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} barCategoryGap={12}>
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
            cursor={{ fill: "#f8fafc" }}
            contentStyle={{
              borderRadius: 12,
              border: `1px solid ${gridColor}`,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          />
          {bars.map((bar) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.color}
              radius={[6, 6, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
