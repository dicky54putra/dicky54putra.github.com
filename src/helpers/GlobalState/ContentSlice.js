import { createSlice } from "@reduxjs/toolkit";

export const ContentSlice = createSlice({
  name: "PortfolioFilter",
  initialState: {
    config: null,
    about: null,
    portfolio: null,
  },
  reducers: {
    ChangeConfig: (state, action) => {
      state.config = action.payload;
    },
    ChangeAbout: (state, action) => {
      state.about = action.payload;
    },
    ChangePortfolio: (state, action) => {
      state.portfolio = action.payload;
    },
  },
});

export const { ChangeAbout, ChangeConfig, ChangePortfolio } =
  ContentSlice.actions;

export const getAbout = (state) => state.content.about;
export const getConfig = (state) => state.content.config;
export const getPortfolio = (state) => state.content.portfolio;

export default ContentSlice.reducer;
