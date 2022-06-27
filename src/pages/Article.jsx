import { lazy, Suspense, useEffect } from "react";

const Wrapper = lazy(() => import("components/moleculs/Wrapper"));
const ArticleCom = lazy(() => import("components/organisms/Article"));

export default function Article() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Suspense fallback={<></>}>
      <Wrapper hasTitle title="Article" hasFooter>
        <ArticleCom />
      </Wrapper>
    </Suspense>
  );
}
