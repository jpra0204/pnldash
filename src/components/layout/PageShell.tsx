import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <main className="flex-1 overflow-y-auto px-4 pb-10 pt-4 md:px-8 lg:px-10">
      {children}
    </main>
  );
}
