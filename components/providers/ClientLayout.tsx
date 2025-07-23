"use client";

import { SessionProvider } from "next-auth/react";
import { ReduxProvider } from "@/store/ReduxProvider";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </SessionProvider>
  );
}
