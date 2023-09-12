import { FC } from "react";
import s from "./Title.module.scss";

interface ITitle {
  text: string;
}

const Title: FC<ITitle> = ({ text }) => {
  return (
    <div className={s.Wrapper}>
      <p className={s.Text}>{text}</p>
    </div>
  );
};

export default Title;
