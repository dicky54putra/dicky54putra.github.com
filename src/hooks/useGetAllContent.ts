import { setContent } from "@store/content/content";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

const useGetAllContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const dispatch = useDispatch();

  const BASE_URL =
    "https://raw.githubusercontent.com/dicky54putra/dicky54putra.github.io/master/api/";
  const DEV_TO_URL = "https://dev.to/api/articles/?username=dicky54putra";

  const article = useSWR(DEV_TO_URL, fetcher);
  const config = useSWR(`${BASE_URL}config.json`, fetcher);
  const portfolio = useSWR(`${BASE_URL}portfolio.json`, fetcher);
  const about = useSWR(`${BASE_URL}about.json`, fetcher);

  const data = {
    portfolio: portfolio.data,
    config: config.data,
    about: about.data,
    article: article.data,
  };

  const isError =
    portfolio.error || config.error || about.error || article.error;

  const isLoading =
    portfolio.isLoading ||
    config.isLoading ||
    about.isLoading ||
    article.isLoading;

  useEffect(() => {
    if (!isError) {
      dispatch(setContent(data));
    }
  }, [data]);

  return { isLoading, data };
};

export default useGetAllContent;
