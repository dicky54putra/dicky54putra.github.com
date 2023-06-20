import { createSlice } from "@reduxjs/toolkit";
import { TPortfolioFilter } from "./portfolioFilter.types";

const initialState: TPortfolioFilter = {
  value: null,
};

export const portfolioFilterSlice = createSlice({
  name: "portfolioFilter",
  initialState,
  reducers: {
    changePortfolioFilterValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changePortfolioFilterValue } = portfolioFilterSlice.actions;

const contentReducers = portfolioFilterSlice.reducer;
export default contentReducers;
