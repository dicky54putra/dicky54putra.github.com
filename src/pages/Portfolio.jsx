import PortfolioContent from "components/organisms/Portfolio";
import Wrapper from "components/moleculs/Wrapper";
import { getAbout, getPortfolio } from "helpers/GlobalState/ContentSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Portfolio() {
  const portfolio = useSelector(getPortfolio);
  const skills = useSelector(getAbout)?.skills;

  const tech = skills?.filter((skill) => skill.all_project === false) ?? [];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Wrapper hasTitle title={portfolio?.title} hasFooter>
      <PortfolioContent data={portfolio?.project} tech={tech} />
    </Wrapper>
  );
}
