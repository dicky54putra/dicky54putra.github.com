import Button from "@components/atoms/Button";
import Link from "@components/atoms/Link";
import useStore from "@hooks/useStore";

const AboutMe = () => {
  const store = useStore();
  console.log(store.content);
  return (
    <div>
      <Link to="/">Homes</Link>
      <Button>asdf</Button>
    </div>
  );
};

export default AboutMe;
