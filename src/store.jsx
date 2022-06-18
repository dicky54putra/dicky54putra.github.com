import { configureStore } from "@reduxjs/toolkit";
import CmRouterSlice from "helpers/GlobalState/CmRouterSlice";
import PortfolioFilterSlice from "helpers/GlobalState/PortfolioFilterSlice";

export default configureStore({
  reducer: {
    route: CmRouterSlice,
    portfolioFilter: PortfolioFilterSlice,
  },
});
