import { createSlice } from "@reduxjs/toolkit";
import { TRoutes } from "../store.types";

const initialState: TRoutes = {
  value: "/",
  loader: false,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    changepath: (state, action) => {
      state.value = action.payload;
    },
    isLoad: (state) => {
      state.loader = !state.loader;
    },
  },
});

export const { changepath, isLoad } = routeSlice.actions;

export default routeSlice.reducer;
