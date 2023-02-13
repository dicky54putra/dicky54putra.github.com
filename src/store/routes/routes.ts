import { createSlice } from "@reduxjs/toolkit";
import { TRoutes } from "../store.types";

const path = window.localStorage.getItem("path");

const initialState: TRoutes = {
	value: path ?? "/",
	loader: false,
};

export const routeSlice = createSlice({
	name: "route",
	initialState,
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

export const { changepath, isLoad } = routeSlice.actions;

export default routeSlice.reducer;
