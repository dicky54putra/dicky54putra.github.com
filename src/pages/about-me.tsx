import Wrapper from "@components/organisms/Wrapper";
import { Suspense, useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Suspense fallback={<></>}>
      <Wrapper hasFooter>
        {/* <PageHome /> */}
        PageArticle
      </Wrapper>
    </Suspense>
  );
};

export default AboutMe;
