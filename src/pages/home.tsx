import { lazy, Suspense, useEffect } from "react";

const Wrapper = lazy(() => import("@components/organisms/Wrapper"));
const PageHome = lazy(() => import("@components/organisms/PageHome"));

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Suspense fallback={<></>}>
      <Wrapper hasFooter>
        <PageHome />
      </Wrapper>
    </Suspense>
  );
};

export default Home;
