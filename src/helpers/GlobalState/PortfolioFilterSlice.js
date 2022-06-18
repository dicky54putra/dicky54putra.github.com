import { createSlice } from "@reduxjs/toolkit";

export const PortfolioFilterSlice = createSlice({
  name: "PortfolioFilter",
  initialState: {
    value: null,
  },
  reducers: {
    ChangePortfolioFilterValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { ChangePortfolioFilterValue } = PortfolioFilterSlice.actions;

export const PortfolioFilterValue = (state) => state.portfolioFilter.value;

export default PortfolioFilterSlice.reducer;
