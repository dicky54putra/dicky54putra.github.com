import { selectComp } from "helpers/GlobalState/CmRouter";
import { useSelector } from "react-redux";
import RouterList from "./RouterList";

const Router = () => {
  const Component = useSelector(selectComp);

  return RouterList.filter((item) => item.name === Component).map(
    (item, index) => {
      return <item.comp key={index} />;
    },
  );
};

export default Router;
