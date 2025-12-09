"use client";

import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

type TopNavbarProps = {
  title?: string;
  onToggleSidebar: () => void;
};

export default function AdminTopbar({
  title = "Dashboard",
  onToggleSidebar,
}: TopNavbarProps) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200/80 bg-[var(--background)]/80 px-4 py-4 backdrop-blur transition-colors dark:border-slate-800/60 dark:bg-slate-950/80 md:px-8 lg:px-10">
      <div className="flex items-center gap-3">
        <button
          aria-label="Toggle sidebar"
          onClick={onToggleSidebar}
          className="rounded-2xl bg-white p-2 text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:text-indigo-600 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-800 dark:hover:text-indigo-100 md:hidden"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
        <div className="hidden flex-col md:flex">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Pages / {title}
          </span>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl">
            {title}
          </h1>
        </div>
        <div className="md:hidden">
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
            {title}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 md:flex">
          <MagnifyingGlassIcon className="h-4 w-4 text-slate-400 dark:text-slate-500" />
          <input
            type="search"
            placeholder="Search..."
            className="w-48 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
          />
        </div>
        <button
          aria-label="Notifications"
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-800 dark:hover:text-indigo-100"
        >
          <BellIcon className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 rounded-2xl bg-white px-2 py-1 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
          <div className="h-9 w-9 rounded-full bg-gradient-to-b from-indigo-500 to-blue-500" />
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              Jasmine Doe
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Admin
            </span>
          </div>
          <ChevronDownIcon className="h-4 w-4 text-slate-400 dark:text-slate-500" />
        </div>
      </div>
    </header>
  );
}
