import Wrapper from "@components/organisms/Wrapper/Wrapper.component";
import useStore from "@hooks/useStore";
import { Suspense, useEffect } from "react";

const Portfolio = () => {
  const store = useStore();
  const portfolio = store.content.portfolio;
  const skills = store.content.about?.skills;

  const tech = skills?.filter((skill) => skill.all_project === false) ?? [];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Suspense fallback={<></>}>
      <Wrapper hasTitle title={portfolio?.title} hasFooter>
        {/* <PortfolioContent data={portfolio?.project} tech={tech} /> */}
        Portfolio
      </Wrapper>
    </Suspense>
  );
};

export default Portfolio;
