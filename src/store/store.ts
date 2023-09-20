import { combineReducers } from "@reduxjs/toolkit";
import contentReducers from "./content/content";
import portfolioFilterReducer from "./portfolioFilter/portfolioFilter";
import routeReducer from "./routes/routes";
import themeReducer from "./theme/theme";

const rootReducer = combineReducers({
  route: routeReducer,
  content: contentReducers,
  portfolioFilter: portfolioFilterReducer,
  theme: themeReducer,
});

export default rootReducer;
