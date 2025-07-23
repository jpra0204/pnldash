import BudgetForm from "@/components/budget/BudgetForm";
import BudgetList from "@/components/budget/BudgetList";

export default function TestPage() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-xl font-bold">Add a Budget Item</h1>
        <BudgetForm />
      </div>
      <div>
        <h2 className="text-lg font-semibold">Your Budget</h2>
        <BudgetList />
      </div>
    </div>
  );
}
