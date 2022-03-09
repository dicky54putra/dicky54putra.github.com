import Wrapper from "components/Wrapper/Wrapper";
import ArticleCom from "components/Article";
import React from "react";

export default function Article() {
  return (
    <Wrapper hasTitle title="Article" hasFooter>
      <ArticleCom />
    </Wrapper>
  );
}
