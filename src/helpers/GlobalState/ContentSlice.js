import { createSlice } from "@reduxjs/toolkit";

export const ContentSlice = createSlice({
  name: "PortfolioFilter",
  initialState: {
    config: null,
    about: null,
    portfolio: null,
    article: null,
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
    ChangeArticle: (state, action) => {
      state.article = action.payload;
    },
  },
});

export const { ChangeAbout, ChangeConfig, ChangePortfolio, ChangeArticle } =
  ContentSlice.actions;

export const getAbout = (state) => state.content.about;
export const getConfig = (state) => state.content.config;
export const getPortfolio = (state) => state.content.portfolio;
export const getArticle = (state) => state.content.article;

export default ContentSlice.reducer;
