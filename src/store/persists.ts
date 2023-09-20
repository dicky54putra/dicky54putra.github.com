import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./store";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["route", "theme"],
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const _configureStore = () => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
    devTools: process.env.NODE_ENV !== "production",
  });
  let persistor = persistStore(store);
  return { store, persistor };
};

export default _configureStore;
