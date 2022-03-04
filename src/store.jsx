import { configureStore } from "@reduxjs/toolkit";
import CmRouterSlice from "helpers/GlobalState/CmRouter";

export default configureStore({
  reducer: {
    route: CmRouterSlice,
  },
});
