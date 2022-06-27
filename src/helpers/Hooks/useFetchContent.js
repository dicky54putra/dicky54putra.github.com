import axios from "axios";
import { API_URL, DEVTO_URL } from "helpers/Constant";
import {
  ChangeAbout,
  ChangeArticle,
  ChangeConfig,
  ChangePortfolio,
} from "helpers/GlobalState/ContentSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetchContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    axios.get(`${API_URL}/config.json`).then((res) => {
      if (isMounted) dispatch(ChangeConfig(res.data));
    });

    axios.get(`${API_URL}/portfolio.json`).then((res) => {
      if (isMounted) dispatch(ChangePortfolio(res.data));
    });

    axios.get(`${API_URL}/about.json`).then((res) => {
      if (isMounted) dispatch(ChangeAbout(res.data));
    });

    axios.get(DEVTO_URL).then((res) => {
      if (isMounted) dispatch(ChangeArticle(res.data));
    });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useFetchContent;
