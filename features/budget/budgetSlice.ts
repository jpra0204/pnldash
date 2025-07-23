import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Budget } from "@/types/budget";
import {
  fetchBudget,
  addBudget,
  updateBudget,
  deleteBudget,
} from "./budgetThunks";

interface BudgetsState {
  budgets: Budget[];
  loading: boolean;
  error: string | null;
}

const initialState: BudgetsState = {
  budgets: [],
  loading: false,
  error: null,
};

const budgetsSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBudget.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBudget.fulfilled,
        (state, action: PayloadAction<Budget[]>) => {
          state.budgets = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchBudget.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch budgets";
      })
      .addCase(
        addBudget.fulfilled,
        (state, action: PayloadAction<Budget[]>) => {
          state.budgets = [action.payload[0], ...state.budgets];
        }
      )
      .addCase(addBudget.rejected, (state, action) => {
        state.error = action.payload || "Failed to add budget";
      })
      .addCase(updateBudget.fulfilled, (state, action) => {
        const updated = action.payload[0];
        const index = state.budgets.findIndex((b) => b.id === updated.id);
        if (index !== -1) {
          state.budgets[index] = updated;
        }
      })
      .addCase(deleteBudget.fulfilled, (state, action) => {
        state.budgets = state.budgets.filter((b) => b.id !== action.payload);
      });
  },
});

export default budgetsSlice.reducer;
