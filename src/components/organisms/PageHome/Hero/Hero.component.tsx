import Button from "@components/atoms/Button";
import { useAppSelector } from "@hooks/useAppSelector";
import s from "./Hero.module.scss";

const Hero = () => {
  const about = useAppSelector((s) => s.content.about);

  return (
    <div className={s.Container}>
      <div className={s.Head}>
        <span className={s.Iam}>I am</span>
        <div className={s.WrapperNameRole}>
          <h2 className={s.Dicky}>{about?.name}</h2>
          <h2 className={s.Role}>{about?.role}</h2>
        </div>
      </div>
      <div className={s.Body}>
        <p>{about?.short_desc}</p>
      </div>
      <div className={s.Cta}>
        <Button
          isAnchor
          variant="Secondary"
          isLink
          to={about?.quote?.link}
          target={"_blank"}
          rel="noopener noreferrer">
          Email Me
        </Button>
        <Button variant="Primary">Download CV</Button>
      </div>
    </div>
  );
};

export default Hero;
