import { configureStore } from "@reduxjs/toolkit";
import CmRouterSlice from "helpers/GlobalState/CmRouterSlice";
import ContentSlice from "helpers/GlobalState/ContentSlice";
import PortfolioFilterSlice from "helpers/GlobalState/PortfolioFilterSlice";

export default configureStore({
  reducer: {
    route: CmRouterSlice,
    portfolioFilter: PortfolioFilterSlice,
    content: ContentSlice,
  },
});
