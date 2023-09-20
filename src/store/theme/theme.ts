import { createSlice } from "@reduxjs/toolkit";
import { TTheme } from "./theme.type";

const initialState: TTheme = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      if (state.value === "light") {
        state.value = "dark";
      } else if (state.value === "dark") {
        state.value = "trueDark";
      } else {
        state.value = "light";
      }
      console.log(window.matchMedia("(prefers-color-scheme: dark)"));
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
