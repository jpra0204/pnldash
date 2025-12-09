"use client";

import {
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { adminNavItems } from "@/config/navigation";

type SidebarProps = {
  activePath?: string | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function AdminSidebar({
  activePath,
  isOpen,
  onClose,
}: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <aside
      className={`fixed left-0 top-0 z-30 flex h-full w-64 flex-col border-r border-slate-200/70 bg-white shadow-xl transition-transform duration-200 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/30 md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-500 text-lg font-semibold text-white shadow-md">
          H
        </div>
        <div className="leading-tight">
          <p className="text-xs uppercase tracking-wide text-indigo-500">
            Horizon
          </p>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            Admin
          </p>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3">
        <ul className="space-y-2">
          {adminNavItems.map(({ label, href, Icon }) => {
            const isActive =
              activePath === href || activePath?.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  aria-current={isActive ? "page" : undefined}
                  href={href}
                  onClick={onClose}
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-100 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100 dark:bg-indigo-500/20 dark:text-indigo-100 dark:ring-indigo-500/20"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border transition ${
                      isActive
                        ? "border-indigo-100 bg-white text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-100"
                        : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-indigo-100 group-hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:border-indigo-500/30 dark:group-hover:text-indigo-100"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="px-4 pb-3">
        <button
          type="button"
          onClick={toggleTheme}
          aria-pressed={isDark}
          className="group flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-indigo-500/40 dark:hover:text-indigo-100"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition dark:bg-slate-700/80 dark:text-slate-100">
              {isDark ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </span>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Theme
              </span>
              <span>{isDark ? "Dark mode" : "Light mode"}</span>
            </div>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-700 dark:bg-slate-700/80 dark:text-slate-200 dark:group-hover:bg-indigo-500/20 dark:group-hover:text-indigo-100">
            Toggle
          </span>
        </button>
      </div>
    </aside>
  );
}
