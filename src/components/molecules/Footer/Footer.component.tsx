import { FC } from "react";
import s from "./Footer.module.scss";
import { TFooter } from "./Footer.types";

const Footer: FC<TFooter> = (props) => {
  const { text } = props;
  return (
    <div className={s.Wrapper}>
      <p className={s.Footer}>{text}</p>
    </div>
  );
};

export default Footer;
