import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

type Row = {
  name: string;
  email: string;
  status: "Active" | "Invited" | "Pending";
  date: string;
  amount: string;
};

const statusStyles: Record<Row["status"], string> = {
  Active: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100",
  Invited: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100",
  Pending: "bg-amber-50 text-amber-600 ring-1 ring-amber-100",
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

export default function RecentTable({ rows = defaultRows }: { rows?: Row[] }) {
  return (
    <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60">
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <div>
          <p className="text-lg font-semibold text-slate-900">Check Table</p>
          <p className="text-sm text-slate-500">Latest projects and invoices</p>
        </div>
        <button
          aria-label="Table actions"
          className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium text-slate-500">
                Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-slate-500">
                Email
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-slate-500">
                Status
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-slate-500">
                Date
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-slate-500">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((row) => (
              <tr
                key={`${row.name}-${row.date}`}
                className="hover:bg-slate-50/70"
              >
                <td className="px-6 py-3 text-slate-900">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      aria-label={`Select ${row.name}`}
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold">{row.name}</span>
                      <span className="text-xs text-slate-500">
                        {row.email}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 text-slate-600">{row.email}</td>
                <td className="px-6 py-3">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-slate-600">{row.date}</td>
                <td className="px-6 py-3 text-slate-900">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
