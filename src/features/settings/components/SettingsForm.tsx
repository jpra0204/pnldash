type SettingsFormProps = {
  onSave?: (settings: Record<string, string>) => void;
};

export default function SettingsForm({ onSave }: SettingsFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const settings = Object.fromEntries(formData.entries());
    onSave?.(settings as Record<string, string>);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
          Workspace Name
        </label>
        <input
          name="workspace"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
          placeholder="Acme Inc."
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
          Timezone
        </label>
        <input
          name="timezone"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
          placeholder="UTC"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Save changes
      </button>
    </form>
  );
}
