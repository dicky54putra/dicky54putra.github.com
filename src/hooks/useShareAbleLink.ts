import { changePortfolioFilterValue } from "@store/portfolioFilter/portfolioFilter";
import { changepath } from "@store/routes/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RouterList from "../router/router.data";
import useParam from "./useParam";

const useShareAbleLink = () => {
  const params = useParam();
  const routerLists = RouterList;
  const dispatch = useDispatch();

  // @ts-ignore
  const page = params.page
    ? // @ts-ignore
      `/${params.page}`
    : window.localStorage.getItem("path");
  // @ts-ignore
  const hasFilter = params.filter;

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
