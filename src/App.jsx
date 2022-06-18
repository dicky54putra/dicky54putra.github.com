import useShareAbleLink from "helpers/Hooks/useShareAbleLink";
import Router from "helpers/Router/Router";

import "./assets/scss/style.scss";

function App() {
  useShareAbleLink();
  return <Router />;
}

export default App;
