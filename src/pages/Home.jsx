import HomeCom from "components/organisms/Home";
import Wrapper from "components/moleculs/Wrapper";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Wrapper hasFooter>
      <HomeCom />
    </Wrapper>
  );
}
