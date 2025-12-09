type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  const classes = [
    "animate-pulse rounded-lg bg-slate-200/80 dark:bg-slate-700/50",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} />;
}
