import PortfolioContent from "components/Portfolio/Portfolio";
import Wrapper from "components/Wrapper/Wrapper";
import React from "react";

export default function Portfolio() {
  return (
    <Wrapper hasTitle title="Portfolio" hasFooter>
      <PortfolioContent />
    </Wrapper>
  );
}
