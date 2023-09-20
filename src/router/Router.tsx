import useStore from "@hooks/useStore";
import useTheme from "@hooks/useTheme";
import Home from "@pages/home";
import RouterList from "./router.data";

const Router = () => {
  const {
    route: { value },
  } = useStore();

  useTheme();

  const match = RouterList.filter((item) => {
    return item.name === value;
  });

  return match.length > 0 ? (
    match.map((item, index) => {
      return <item.comp key={index} />;
    })[0]
  ) : (
    <Home />
  );
};

export default Router;
