import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

type Row = {
  name: string;
  email: string;
  status: "Active" | "Invited" | "Pending";
  date: string;
  amount: string;
};

const statusStyles: Record<Row["status"], string> = {
  Active:
    "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 dark:bg-emerald-500/15 dark:text-emerald-100 dark:ring-emerald-500/30",
  Invited:
    "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 dark:bg-indigo-500/15 dark:text-indigo-100 dark:ring-indigo-500/30",
  Pending:
    "bg-amber-50 text-amber-600 ring-1 ring-amber-100 dark:bg-amber-500/15 dark:text-amber-100 dark:ring-amber-500/30",
};

const defaultRows: Row[] = [
  {
    name: "Marketplace",
    email: "market@horizon.dev",
    status: "Active",
    date: "Apr 26, 2022",
    amount: "$2,458",
  },
  {
    name: "Venus DB PRO",
    email: "venus@horizon.dev",
    status: "Invited",
    date: "Jul 20, 2022",
    amount: "$1,485",
  },
  {
    name: "Venus DS",
    email: "design@horizon.dev",
    status: "Pending",
    date: "Sep 30, 2022",
    amount: "$1,024",
  },
  {
    name: "Venus 3D Asset",
    email: "asset@horizon.dev",
    status: "Active",
    date: "Oct 24, 2022",
    amount: "$858",
  },
  {
    name: "Marketplace 2",
    email: "marketplace@horizon.dev",
    status: "Active",
    date: "Nov 29, 2022",
    amount: "$258",
  },
];

export default function DashboardRecentTable({
  rows = defaultRows,
}: {
  rows?: Row[];
}) {
  return (
    <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 transition-colors dark:bg-slate-900 dark:ring-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-800">
        <div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            Check Table
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Latest projects and invoices
          </p>
        </div>
        <button
          aria-label="Table actions"
          className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100 text-left text-sm dark:divide-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-800/60">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium text-slate-500 dark:text-slate-400">
                Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-slate-500 dark:text-slate-400">
                Email
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-slate-500 dark:text-slate-400">
                Status
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-slate-500 dark:text-slate-400">
                Date
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-slate-500 dark:text-slate-400">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-900">
            {rows.map((row) => (
              <tr
                key={`${row.name}-${row.date}`}
                className="hover:bg-slate-50/70 dark:hover:bg-slate-800/60"
              >
                <td className="px-6 py-3 text-slate-900 dark:text-white">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900"
                      aria-label={`Select ${row.name}`}
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold">{row.name}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {row.email}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 text-slate-600 dark:text-slate-300">
                  {row.email}
                </td>
                <td className="px-6 py-3">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-slate-600 dark:text-slate-300">
                  {row.date}
                </td>
                <td className="px-6 py-3 text-slate-900 dark:text-white">
                  {row.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
