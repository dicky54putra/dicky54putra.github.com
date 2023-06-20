import Button from "@components/atoms/Button";
import useStore from "@hooks/useStore";
import s from "./Hero.module.scss";

const Hero = () => {
  const store = useStore();
  const about = store.content.about;

  return (
    <div className={s.container}>
      <div className={s.head}>
        <span className={s.iam}>I am</span>
        <div className={s.wrapperNameRole}>
          <h1 className={s.dicky}>{about?.name}</h1>
          <h2 className={s.role}>{about?.role}</h2>
        </div>
      </div>
      <div className={s.body}>
        <p>{about?.short_desc}</p>
      </div>
      <div className={s.cta}>
        <Button
          isAnchor
          variant="secondary"
          isLink
          to={about?.quote?.link}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Email Me
        </Button>
        <Button variant="primary">Download CV</Button>
      </div>
    </div>
  );
};

export default Hero;
