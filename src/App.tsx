import Loading from "@components/atoms/Loading";
import _configureStore from "@store/persists";
import "@styles/styles.scss";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./router";

const { store, persistor } = _configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
