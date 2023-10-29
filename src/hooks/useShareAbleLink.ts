import { changePortfolioFilterValue } from "@store/portfolioFilter/portfolioFilter";
import { changepath } from "@store/routes/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RouterList from "../router/router.data";
import useParams from "./useParams";

const useShareAbleLink = () => {
  const params = useParams();
  const routerLists = RouterList;
  const dispatch = useDispatch();

  // @ts-ignore
  const page = params.page
    ? // @ts-ignore
      `/${params.page}`
    : window.localStorage.getItem("path");
  // @ts-ignore
  const hasFilter = params.filter ? params.filter : null;

  const hasPage = routerLists.filter((item) => {
    return item.name === page;
  });

  useEffect(() => {
    if (hasPage.length > 0) {
      dispatch(changepath(page));
    }

    if (hasFilter !== null) {
      dispatch(changePortfolioFilterValue(hasFilter));
    }
    window.history.replaceState(
      { additionalInformation: "Updated the URL with JS" },
      "Frontend Developer | Dicky54putra",
      "/",
    );
  }, [dispatch, hasPage, page, hasFilter]);
};

export default useShareAbleLink;
