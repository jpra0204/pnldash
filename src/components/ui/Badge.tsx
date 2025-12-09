import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  color?: "gray" | "indigo" | "emerald";
  className?: string;
};

export default function Badge({
  children,
  color = "gray",
  className,
}: BadgeProps) {
  const colors: Record<typeof color, string> = {
    gray: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
    indigo:
      "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100 dark:bg-indigo-500/20 dark:text-indigo-100 dark:ring-indigo-500/30",
    emerald:
      "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-100 dark:ring-emerald-500/30",
  };

  const classes = [
    "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
    colors[color],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
