import PageArticle from "@components/organisms/PageArticle";
import Wrapper from "@components/organisms/Wrapper/Wrapper.component";
import { Suspense, useEffect } from "react";

const Article = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Suspense fallback={<></>}>
      <Wrapper hasFooter hasTitle title="Article">
        <PageArticle />
      </Wrapper>
    </Suspense>
  );
};

export default Article;
