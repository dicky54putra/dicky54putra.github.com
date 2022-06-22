import useFetchContent from "helpers/Hooks/useFetchContent";
import useShareAbleLink from "helpers/Hooks/useShareAbleLink";
import Router from "helpers/Router/Router";

import "./assets/scss/style.scss";

function App() {
  useFetchContent();
  useShareAbleLink();
  // @ts-ignore
  return <Router />;
}

export default App;
