import Wrapper from "components/moleculs/Wrapper";
import ArticleCom from "components/organisms/Article";
import { useEffect } from "react";

export default function Article() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Wrapper hasTitle title="Article" hasFooter>
      <ArticleCom />
    </Wrapper>
  );
}
