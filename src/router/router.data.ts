import AboutMe from "@pages/about-me";
import Article from "@pages/article";
import Home from "@pages/home";
import Portfolio from "@pages/portfolio";

const RouterList = [
  {
    name: "/",
    comp: Home,
  },
  {
    name: "/portfolio",
    comp: Portfolio,
  },
  {
    name: "/about-me",
    comp: AboutMe,
  },
  {
    name: "/article",
    comp: Article,
  },
];

export default RouterList;
