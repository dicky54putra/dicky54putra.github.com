import { combineReducers } from "@reduxjs/toolkit";
import contentReducers from "./content/content";
import portfolioFilterReducer from "./portfolioFilter/portfolioFilter";
import routeReducer from "./routes/routes";

const rootReducer = combineReducers({
  route: routeReducer,
  content: contentReducers,
  portfolioFilter: portfolioFilterReducer,
});

export default rootReducer;
