import { getAbout, getPortfolio } from "helpers/GlobalState/ContentSlice";
import { useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";

const Wrapper = lazy(() => import("components/moleculs/Wrapper"));
const PortfolioContent = lazy(() => import("components/organisms/Portfolio"));

export default function Portfolio() {
  const portfolio = useSelector(getPortfolio);
  const skills = useSelector(getAbout)?.skills;

  const tech = skills?.filter((skill) => skill.all_project === false) ?? [];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Suspense fallback={<></>}>
      <Wrapper hasTitle title={portfolio?.title} hasFooter>
        <PortfolioContent data={portfolio?.project} tech={tech} />
      </Wrapper>
    </Suspense>
  );
}
