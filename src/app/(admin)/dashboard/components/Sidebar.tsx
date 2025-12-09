"use client";

import {
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  HomeIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

type SidebarProps = {
  activePath?: string | null;
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  { label: "Dashboard", href: "/dashboard", Icon: HomeIcon },
  { label: "Users", href: "/users", Icon: UserGroupIcon },
  { label: "Analytics", href: "/analytics", Icon: ChartBarIcon },
  { label: "Projects", href: "/projects", Icon: Squares2X2Icon },
  { label: "Settings", href: "/settings", Icon: Cog6ToothIcon },
];

export default function Sidebar({
  activePath,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 z-30 flex h-full w-64 flex-col border-r border-slate-200 bg-white shadow-xl transition-transform duration-200 md:translate-x-0 ${
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
          <p className="text-lg font-semibold text-slate-900">Admin</p>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3">
        <ul className="space-y-2">
          {navItems.map(({ label, href, Icon }) => {
            const isActive =
              activePath === href || activePath?.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  aria-current={isActive ? "page" : undefined}
                  href={href}
                  onClick={onClose}
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-indigo-50 hover:text-indigo-700 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
                      : "text-slate-600"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border transition ${
                      isActive
                        ? "border-indigo-100 bg-white text-indigo-600"
                        : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-indigo-100 group-hover:text-indigo-600"
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
      <div className="m-4 rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-500 p-4 text-white shadow-lg">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
        </div>
        <p className="text-lg font-semibold">Upgrade to PRO</p>
        <p className="mt-1 text-sm text-white/80">
          Unlock more analytics, better charts, and priority support.
        </p>
        <button className="mt-4 w-full rounded-xl bg-white px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:translate-y-px hover:bg-slate-50">
          Upgrade
        </button>
      </div>
    </aside>
  );
}
