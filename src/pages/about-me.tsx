import PageAbout from "@components/organisms/PageAbout";
import Wrapper from "@components/organisms/Wrapper";
import useStore from "@hooks/useStore";
import { Suspense, useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const {
    content: { about },
  } = useStore();
  return (
    <Suspense fallback={<></>}>
      <Wrapper hasFooter title={about?.title} hasTitle>
        <PageAbout />
      </Wrapper>
    </Suspense>
  );
};

export default AboutMe;
