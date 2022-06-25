import Wrapper from "components/moleculs/Wrapper";
import {
  Education,
  Quote,
  Skills,
  Intro,
  WorkExperience,
} from "components/organisms/AboutMe";
import CV from "components/organisms/AboutMe/CV";
import { useSelector } from "react-redux";
import { getAbout } from "helpers/GlobalState/ContentSlice";
import { useEffect } from "react";
export default function AboutMe() {
  const about = useSelector(getAbout);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Wrapper hasTitle title={about?.title} hasFooter>
      <Intro image={about?.profile} desc={about?.desc} />
      <WorkExperience datas={about?.work_experience} title="Positions" />
      <Education datas={about?.education} title="Education" />
      <Skills datas={about?.skills} title="Tech Stack" />
      <Quote data={about?.quote} />
      <CV data={about} />
    </Wrapper>
  );
}
