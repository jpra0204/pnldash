"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/store";
import type { RootState } from "@/store";
import { fetchBudget } from "@/features/budget/budgetThunks";
import { Budget } from "@/types/budget";

export default function BudgetList() {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const { budget, loading, error } = useAppSelector(
    (state: RootState) => state.budget
  );

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      dispatch(fetchBudget(session.user.id));
    }
  }, [status, session?.user?.id]);

  if (loading) return <p>Loading budget...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!budget.length) return <p>No budget items yet.</p>;

  return (
    <ul className="space-y-2 mt-4">
      {budget.map((b: Budget) => (
        <li key={b.id}>
          <strong>{b.name}</strong> ({b.category}): ${b.amount}
          {b.is_recurring ? " (recurring)" : ""}
        </li>
      ))}
    </ul>
  );
}
