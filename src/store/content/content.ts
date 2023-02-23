import { createSlice } from "@reduxjs/toolkit";
import { TContent } from "./content.types";

const initialState: TContent = {
  portfolio: undefined,
  about: undefined,
  config: undefined,
  article: undefined,
};

export const contentSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.about = action.payload.about;
      state.config = action.payload.config;
      state.article = action.payload.article;
      state.portfolio = action.payload.portfolio;
    },
  },
});

export const { setContent } = contentSlice.actions;

const contentReducers = contentSlice.reducer;
export default contentReducers;
