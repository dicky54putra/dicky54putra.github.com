import { lazy, Suspense, useEffect } from "react";

const Wrapper = lazy(() => import("components/moleculs/Wrapper"));
const HomeCom = lazy(() => import("components/organisms/Home"));

export default function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Suspense fallback={<></>}>
      <Wrapper hasFooter>
        <HomeCom />
      </Wrapper>
    </Suspense>
  );
}
