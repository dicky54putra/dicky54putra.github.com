import PageAbout from "@components/organisms/PageAbout";
import Wrapper from "@components/organisms/Wrapper";
import { useAppSelector } from "@hooks/useAppSelector";
import { Suspense, useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const about = useAppSelector((s) => s.content.about);
  return (
    <Suspense fallback={<></>}>
      <Wrapper hasFooter title={about?.title} hasTitle>
        <PageAbout />
      </Wrapper>
    </Suspense>
  );
};

export default AboutMe;
