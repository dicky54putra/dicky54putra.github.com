import Button from "@components/atoms/Button";
import Popup from "@components/molecules/Popup";
import CV from "@components/organisms/CV";
import { useAppSelector } from "@hooks/useAppSelector";
import { useState } from "react";
import s from "./Hero.module.scss";

const Hero = () => {
  const about = useAppSelector((s) => s.content.about);
  const [popup, setPopup] = useState(false);

  return (
    <>
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
          <Button
            variant="Primary"
            onClick={() => setPopup(true)}
            target={"_blank"}
            rel="noopener noreferrer">
            See my CV
          </Button>
        </div>
      </div>

      <Popup isActive={popup} onClickOverlay={() => setPopup(false)}>
        <CV />
      </Popup>
    </>
  );
};

export default Hero;
