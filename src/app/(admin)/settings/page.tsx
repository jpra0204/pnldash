"use client";

import PageHeader from "@/components/layout/PageHeader";
import SettingsForm from "@/features/settings/components/SettingsForm";
import { useSettings } from "@/features/settings/hooks/useSettings";

export default function SettingsPage() {
  const { settings, isLoading } = useSettings();

  return (
    <div className="space-y-6">
      <PageHeader title="Settings" subtitle="Pages / Settings" />
      {isLoading ? (
        <div className="rounded-2xl bg-white p-4 text-sm text-slate-500 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-800">
          Loading settings...
        </div>
      ) : (
        <SettingsForm
          onSave={(values) => {
            console.log("Saved settings", { ...settings, ...values });
          }}
        />
      )}
    </div>
  );
}
