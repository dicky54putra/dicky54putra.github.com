import { useSelector } from "react-redux";
import { getAbout } from "helpers/GlobalState/ContentSlice";
import { lazy, Suspense, useEffect } from "react";

const Wrapper = lazy(() => import("components/moleculs/Wrapper"));
const Education = lazy(() => import("components/organisms/AboutMe/Education"));
const Intro = lazy(() => import("components/organisms/AboutMe/Intro"));
const WorkExperience = lazy(() =>
  import("components/organisms/AboutMe/WorkExperience"),
);
const Skills = lazy(() => import("components/organisms/AboutMe/Skills"));
const Quote = lazy(() => import("components/organisms/AboutMe/Quote"));
export default function AboutMe() {
  const about = useSelector(getAbout);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Suspense fallback={<></>}>
      <Wrapper hasTitle title={about?.title} hasFooter>
        <Intro image={about?.profile} desc={about?.desc} />
        <WorkExperience datas={about?.work_experience} title="Positions" />
        <Education datas={about?.education} title="Education" />
        <Skills datas={about?.skills} title="Tech Stack" />
        <Quote data={about?.quote} />
      </Wrapper>
    </Suspense>
  );
}
