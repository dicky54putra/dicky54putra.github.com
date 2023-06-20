import { FC } from "react";
import s from "./Footer.module.scss";
import { TFooter } from "./Footer.types";

const Footer: FC<TFooter> = (props) => {
  const { text } = props;
  return (
    <div className={s.wrapper}>
      <p className={s.footer}>{text}</p>
    </div>
  );
};

export default Footer;
