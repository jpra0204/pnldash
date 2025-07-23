export interface Budget {
  id: string;
  user_id: string;
  name: string;
  category: string;
  amount: number;
  is_recurring: boolean;
  created_at: string;
  updated_at: string;
}
