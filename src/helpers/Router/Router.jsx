import { selectComp } from "helpers/GlobalState/CmRouterSlice";
import Home from "pages/Home";
import { useSelector } from "react-redux";
import RouterList from "./RouterList";

const Router = () => {
  const Component = useSelector(selectComp);

  const match = RouterList.filter((item) => {
    return item.name === Component;
  });

  return match.length > 0 ? (
    match.map((item, index) => {
      return <item.comp key={index} />;
    })
  ) : (
    <Home />
  );
};

export default Router;
