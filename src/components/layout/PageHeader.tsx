type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {subtitle}
      </p>
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h1>
    </div>
  );
}
