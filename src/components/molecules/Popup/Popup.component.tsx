import clsx from "clsx";
import { FC } from "react";
import s from "./Popup.module.scss";
import { TPopup } from "./Popup.type";

const Popup: FC<TPopup> = ({ isActive, children, onClickOverlay }) => {
  return (
    <div className={clsx(s.Wrapper, isActive && s["Wrapper--Active"])}>
      <div className={s.Content}>{children}</div>
      <div className={s.Overlay} onClick={onClickOverlay}></div>
    </div>
  );
};

export default Popup;
