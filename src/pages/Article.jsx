import Wrapper from "components/moleculs/Wrapper";
import ArticleCom from "components/organisms/Article";

export default function Article() {
  return (
    <Wrapper hasTitle title="Article" hasFooter>
      <ArticleCom />
    </Wrapper>
  );
}
