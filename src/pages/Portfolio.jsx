import PortfolioContent from "components/organisms/Portfolio";
import Wrapper from "components/moleculs/Wrapper";
import { getAbout, getPortfolio } from "helpers/GlobalState/ContentSlice";
import { useSelector } from "react-redux";

export default function Portfolio() {
  const portfolio = useSelector(getPortfolio);
  const skills = useSelector(getAbout)?.skills;

  const tech = skills?.filter((skill) => skill.all_project === false) ?? [];
  return (
    <Wrapper hasTitle title={portfolio?.title} hasFooter>
      <PortfolioContent data={portfolio?.project} tech={tech} />
    </Wrapper>
  );
}
