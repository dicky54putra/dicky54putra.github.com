import AboutMe from "pages/AboutMe";
import Article from "pages/Article";
import Home from "pages/Home";
import Portfolio from "pages/Portfolio";

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
