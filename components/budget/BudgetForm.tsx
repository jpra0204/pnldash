"use client";

import { useState } from "react";
import { useAppDispatch } from "@/store";
import { useSession } from "next-auth/react";
import { addBudget } from "@/features/budget/budgetThunks";

export default function BudgetForm() {
  const dispatch = useAppDispatch();
  const { data: session } = useSession();

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [isRecurring, setIsRecurring] = useState(true);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user?.id) {
      setError("User not logged in");
      return;
    }

    if (!category || amount <= 0) {
      setError("Category and amount are required");
      return;
    }

    try {
      await dispatch(
        addBudget({
          user_id: session.user.id,
          name,
          category,
          amount,
          is_recurring: isRecurring,
        })
      ).unwrap();

      setCategory("");
      setAmount(0);
      setIsRecurring(true);
      setError("");
      setName("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to add budget item");
      } else {
        setError("Failed to add budget item");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
        />
        Recurring?
      </label>

      <button type="submit">Add Budget Item</button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
