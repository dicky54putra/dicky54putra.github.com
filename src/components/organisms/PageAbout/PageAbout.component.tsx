import { useAppSelector } from "@hooks/useAppSelector";
import Education from "./Education";
import Intro from "./Intro";
import Quote from "./Quote";
import Skill from "./Skill";
import WorkExperience from "./WorkExperience";

const PageAbout = () => {
  const about = useAppSelector((s) => s.content.about);
  return (
    <>
      <Intro image={about?.profile} desc={about?.desc} />
      <WorkExperience datas={about?.work_experience} title="Positions" />
      <Education datas={about?.education} title="Education" />
      <Skill datas={about?.skills} title="Tech Stack" />
      <Quote data={about?.quote} />
    </>
  );
};

export default PageAbout;
