"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "./dashboard/components/Sidebar";
import TopNavbar from "./dashboard/components/TopNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-[#f6f8fb] text-slate-900">
      <Sidebar
        activePath={pathname}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      {isSidebarOpen ? (
        <button
          className="fixed inset-0 z-20 bg-black/20 md:hidden"
          aria-label="Close sidebar"
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : null}
      <div className="flex min-h-screen flex-1 flex-col md:pl-64">
        <TopNavbar
          title="Dashboard"
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />
        <main className="flex-1 overflow-y-auto px-4 pb-10 pt-4 md:px-8 lg:px-10">
          {children}
        </main>
      </div>
    </div>
  );
}
