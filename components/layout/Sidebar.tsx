"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOut, Settings, User } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const isLoggedIn = status === "authenticated";

  // prevent body scroll on mobile when drawer is open
  useEffect(() => {
    if (!isDesktop) {
      document.body.style.overflow = open ? "hidden" : "";
    }
  }, [open, isDesktop]);

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Budgets", href: "/dashboard/budgets" },
    { label: "Revenues", href: "/dashboard/revenues" },
    // Add more links as needed
  ];

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full">
      {/* Top navigation */}
      <nav className="flex flex-col gap-4 p-4">
        <h2 className="text-lg font-bold">Menu</h2>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[var(--sidebar-foreground)] hover:text-[var(--sidebar-primary-foreground)] hover:bg-[var(--sidebar-primary)] px-2 py-1 rounded transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom auth section */}
      <div className="flex flex-col gap-4 p-4 border-t pt-4">
        {!isLoggedIn ? (
          <div className="space-y-2">
            <button
              onClick={() => router.push("/auth/login")}
              className="w-full text-left text-sm hover:underline"
            >
              Log in
            </button>
            <button
              onClick={() => router.push("/auth/register")}
              className="w-full text-left text-sm hover:underline"
            >
              Sign up
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground">
              Welcome{" "}
              <span className="font-medium">
                {session?.user?.name ?? session?.user?.email}
              </span>
            </p>
            <div className="flex items-center justify-between ">
              <div className="flex gap-4">
                <button
                  onClick={() => router.push("/profile")}
                  className="hover:text-[var(--sidebar-accent-foreground)] hover:bg-[var(--sidebar-accent)] p-2 rounded"
                >
                  <User size={20} />
                </button>
                <button
                  onClick={() => router.push("/settings")}
                  className="hover:text-[var(--sidebar-accent-foreground)] hover:bg-[var(--sidebar-accent)] p-2 rounded"
                >
                  <Settings size={20} />
                </button>
                <ThemeToggle />
              </div>
              <button
                onClick={() => signOut()}
                className="hover:text-[var(--sidebar-accent-foreground)] hover:bg-[var(--sidebar-accent)] p-2 rounded"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Desktop: Sticky sidebar
  if (isDesktop) {
    return (
      <aside className="h-screen sticky top-0 w-60 hidden lg:flex flex-col bg-[var(--sidebar)] text-[var(--sidebar-foreground)] border-r border-[var(--sidebar-border)]">
        {sidebarContent}
      </aside>
    );
  }

  // Mobile: Drawer + hamburger
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger className="lg:hidden p-4">
        <span className="text-2xl">☰</span>
      </DrawerTrigger>
      <DrawerContent className="h-full w-64 bg-[var(--sidebar)] text-[var(--sidebar-foreground)]">
        {sidebarContent}
      </DrawerContent>
    </Drawer>
  );
}
