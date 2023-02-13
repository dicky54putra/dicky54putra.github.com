import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./routes/routes";

const store = configureStore({
	reducer: {
		route: routeReducer,
	},
});

export default store;
