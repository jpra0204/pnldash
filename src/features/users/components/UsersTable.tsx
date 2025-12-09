type UserRow = {
  id: string;
  name: string;
  email: string;
};

export default function UsersTable({ users }: { users: UserRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
      <table className="min-w-full divide-y divide-slate-100 text-left text-sm dark:divide-slate-800">
        <thead className="bg-slate-50 dark:bg-slate-800/60">
          <tr>
            <th className="px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">
              Name
            </th>
            <th className="px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">
              Email
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <td className="px-4 py-3 text-slate-900 dark:text-white">
                {user.name}
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
