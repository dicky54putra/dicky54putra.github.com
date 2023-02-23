import Button from "@components/atoms/Button";
import Link from "@components/atoms/Link";
import Wrapper from "@components/organisms/Wrapper";
import useStore from "@hooks/useStore";

const AboutMe = () => {
  const store = useStore();
  console.log(store.content);
  return (
    <Wrapper>
      <Link to="/">Homes</Link>
      <Button>asdf</Button>
    </Wrapper>
  );
};

export default AboutMe;
