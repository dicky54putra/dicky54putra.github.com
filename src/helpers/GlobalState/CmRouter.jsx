import { createSlice } from "@reduxjs/toolkit";

const path = window.localStorage.getItem("path");
export const CmRouterSlice = createSlice({
  name: "CustomRouter",
  initialState: {
    value: path ?? "/",
  },
  reducers: {
    changepath: (state, action) => {
      state.value = action.payload;
      window.localStorage.setItem("path", state.value);
    },
  },
});

export const { changepath } = CmRouterSlice.actions;

export const selectComp = (state) => state.route.value;

export default CmRouterSlice.reducer;
