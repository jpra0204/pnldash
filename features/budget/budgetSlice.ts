import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Budget } from "@/types/budget";
import {
  fetchBudget,
  addBudget,
  updateBudget,
  deleteBudget,
} from "./budgetThunks";

interface BudgetState {
  budget: Budget[];
  loading: boolean;
  error: string | null;
}

const initialState: BudgetState = {
  budget: [],
  loading: false,
  error: null,
};

const budgetSlice = createSlice({
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
          state.budget = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchBudget.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch budget";
      })
      .addCase(
        addBudget.fulfilled,
        (state, action: PayloadAction<Budget[]>) => {
          state.budget = [action.payload[0], ...state.budget];
        }
      )
      .addCase(addBudget.rejected, (state, action) => {
        state.error = action.payload || "Failed to add budget";
      })
      .addCase(updateBudget.fulfilled, (state, action) => {
        const updated = action.payload[0];
        const index = state.budget.findIndex((b) => b.id === updated.id);
        if (index !== -1) {
          state.budget[index] = updated;
        }
      })
      .addCase(deleteBudget.fulfilled, (state, action) => {
        state.budget = state.budget.filter((b) => b.id !== action.payload);
      });
  },
});

export default budgetSlice.reducer;
