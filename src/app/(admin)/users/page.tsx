"use client";

import PageHeader from "@/components/layout/PageHeader";
import UsersTable from "@/features/users/components/UsersTable";
import { useUsers } from "@/features/users/hooks/useUsers";

export default function UsersPage() {
  const { users, isLoading } = useUsers();

  return (
    <div className="space-y-6">
      <PageHeader title="Users" subtitle="Pages / Users" />
      {isLoading ? (
        <div className="rounded-2xl bg-white p-4 text-sm text-slate-500 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-800">
          Loading users...
        </div>
      ) : (
        <UsersTable users={users} />
      )}
    </div>
  );
}
