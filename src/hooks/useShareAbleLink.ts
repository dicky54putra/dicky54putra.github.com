import { changePortfolioFilterValue } from "@store/portfolioFilter/portfolioFilter";
import { changepath } from "@store/routes/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RouterList from "../router/router.data";
import usePaths from "./usePaths";

const useShareAbleLink = () => {
  const paths = usePaths();
  const routerLists = RouterList;
  const dispatch = useDispatch();

  // @ts-ignore
  const page = paths[0]
    ? // @ts-ignore
      `/${paths[0]}`
    : window.localStorage.getItem("path");
  // @ts-ignore
  const hasFilter = paths[0] ? (paths[1] ? paths[1] : null) : null;

  const hasPage = routerLists.filter((item) => {
    return item.name === page;
  });

  useEffect(() => {
    if (hasPage.length > 0) {
      // @ts-ignore
      dispatch(changepath(page));
    }

    if (hasFilter !== null) {
      dispatch(changePortfolioFilterValue(hasFilter));
    }
  }, [dispatch, hasPage, page, hasFilter]);
};

export default useShareAbleLink;
