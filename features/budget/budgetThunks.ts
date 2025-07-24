import { createAsyncThunk } from "@reduxjs/toolkit";
import { Budget } from "@/types/budget";
import { supabase } from "@/lib/supabase";

export const fetchBudget = createAsyncThunk<
  Budget[],
  string,
  { rejectValue: string }
>("budget/fetchBudget", async (userId, { rejectWithValue }) => {
  const { data, error } = await supabase
    .from("budget")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) return rejectWithValue(error.message);
  return data as Budget[];
});

export const addBudget = createAsyncThunk<
  Budget[],
  Omit<Budget, "id" | "created_at" | "updated_at">,
  { rejectValue: string }
>("budget/addBudget", async (budget, { rejectWithValue }) => {
  const { data, error } = await supabase
    .from("budget")
    .insert([budget])
    .select();

  if (error) return rejectWithValue(error.message);
  return data as Budget[];
});

export const updateBudget = createAsyncThunk<
  Budget[],
  {
    id: string;
    data: Partial<Omit<Budget, "id" | "created_at" | "updated_at">>;
  },
  { rejectValue: string }
>("budget/updateBudget", async ({ id, data }, { rejectWithValue }) => {
  const { data: updated, error } = await supabase
    .from("budget")
    .update(data)
    .eq("id", id)
    .select();

  if (error) return rejectWithValue(error.message);
  return updated as Budget[];
});

// returns deleted budget id
// input = id
export const deleteBudget = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("budget/deleteBudget", async (id, { rejectWithValue }) => {
  const { error } = await supabase.from("budget").delete().eq("id", id);

  if (error) return rejectWithValue(error.message);
  return id;
});
