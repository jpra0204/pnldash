"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import AdminSidebar from "@/components/layout/AdminSidebar";
import AdminTopbar from "@/components/layout/AdminTopbar";
import PageShell from "@/components/layout/PageShell";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <AdminSidebar
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
        <AdminTopbar
          title="Dashboard"
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />
        <PageShell>{children}</PageShell>
      </div>
    </div>
  );
}
