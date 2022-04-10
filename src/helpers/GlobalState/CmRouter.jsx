import { createSlice } from "@reduxjs/toolkit";

const path = window.localStorage.getItem("path");
export const CmRouterSlice = createSlice({
  name: "CustomRouter",
  initialState: {
    value: path ?? "/",
    loader: false,
  },
  reducers: {
    changepath: (state, action) => {
      state.value = action.payload;
      window.localStorage.setItem("path", state.value);
    },
    isLoad: (state) => {
      state.loader = !state.loader;
    },
  },
});

export const { changepath, isLoad } = CmRouterSlice.actions;

export const selectComp = (state) => state.route.value;
export const isLoader = (state) => state.route.loader;

export default CmRouterSlice.reducer;
