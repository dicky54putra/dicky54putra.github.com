import PagePortfolio from "@components/organisms/PagePortfolio";
import Wrapper from "@components/organisms/Wrapper/Wrapper.component";
import { useAppSelector } from "@hooks/useAppSelector";
import { Suspense, useEffect } from "react";

const Portfolio = () => {
  const skills = useAppSelector((s) => s.content.about?.skills);
  const portfolio = useAppSelector((s) => s.content.portfolio);

  const tech = skills?.filter((skill) => skill.all_project === false) ?? [];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Suspense fallback={<></>}>
      <Wrapper hasTitle title={portfolio?.title} hasFooter>
        <PagePortfolio data={portfolio?.project} tech={tech} />
      </Wrapper>
    </Suspense>
  );
};

export default Portfolio;
