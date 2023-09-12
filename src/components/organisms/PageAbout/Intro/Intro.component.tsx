import { RAW_IMAGES } from "@/constant/generals";
import { FC } from "react";
import s from "./Intro.module.scss";

type TIntro = {
  desc?: string;
  image?: string;
};
const Intro: FC<TIntro> = (props) => {
  const { desc, image } = props;
  return (
    <div className={s.Wrapper}>
      <div className={s.Profile}>
        <img
          src={`${RAW_IMAGES}${image}`}
          alt="Profile"
          height={80}
          width={80}
        />
      </div>
      <p className={s.Desc}>{desc}</p>
      <hr />
    </div>
  );
};

export default Intro;
