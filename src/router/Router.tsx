import { useAppSelector } from "@hooks/useAppSelector";
import useFlashlight from "@hooks/useFlashlight";
import useShareAbleLink from "@hooks/useShareAbleLink";
import useTheme from "@hooks/useTheme";
import Home from "@pages/home";
import RouterList from "./router.data";

const Router = () => {
  const value = useAppSelector((s) => s.route.value);

  useTheme();
  useFlashlight();
  useShareAbleLink();

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
