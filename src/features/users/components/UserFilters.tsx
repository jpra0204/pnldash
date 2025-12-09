type UserFiltersProps = {
  onSearch?: (value: string) => void;
};

export default function UserFilters({ onSearch }: UserFiltersProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
        Search
        <input
          type="search"
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
          placeholder="Find a user..."
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </label>
    </div>
  );
}
