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
export default function AboutMe() {
  const about = useSelector(getAbout);

  return (
    <Wrapper hasTitle title={about?.title} hasFooter>
      <Intro image={about?.profile} desc={about?.desc} />
      <WorkExperience data={about?.work_experience} />
      <Education data={about?.education} />
      <Skills data={about?.skills} />
      <Quote data={about?.quote} />
      <CV data={about} />
    </Wrapper>
  );
}
