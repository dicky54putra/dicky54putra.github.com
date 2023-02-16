import { combineReducers } from "@reduxjs/toolkit";
import contentReducers from "./content/content";
import routeReducer from "./routes/routes";

const rootReducer = combineReducers({
  route: routeReducer,
  content: contentReducers,
});

export default rootReducer;
