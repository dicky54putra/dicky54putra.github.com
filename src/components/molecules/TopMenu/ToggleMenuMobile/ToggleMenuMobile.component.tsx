import { FC, useState } from "react";
import s from "./ToggleMenuMobile.module.scss";
import { TToggleMenuMobile } from "./ToggleMenuMobile.types";

const ToggleMenuMobile: FC<TToggleMenuMobile> = (props) => {
  const { open, close } = props;
  const [State, setState] = useState<boolean>(false);

  const handleClick = () => {
    const menu = document.getElementById("menu");
    const wrapperTopMenu = document.getElementById("wrapper-top-menu");
    const toggleMenuMobile = document.getElementById("toggleMenuMobile");

    setState((State) => !State);
    if (toggleMenuMobile)
      toggleMenuMobile.style.color = State ? "var(--white)" : "var(--black)";
    if (menu)
      menu.style.transform = State ? "translateX(-100%)" : "translateX(0%)";
    if (wrapperTopMenu) wrapperTopMenu.style.color = State ? "#fff" : "#000";
    if (State) {
      setTimeout(() => {
        if (wrapperTopMenu) wrapperTopMenu.style.mixBlendMode = "difference";
      }, 300);
    } else {
      if (wrapperTopMenu) wrapperTopMenu.style.mixBlendMode = "unset";
    }

    if (wrapperTopMenu)
      wrapperTopMenu.style.backdropFilter = State ? "2px" : "none";
  };

  return (
    <span id="toggleMenuMobile" className={s.MenuMobile} onClick={handleClick}>
      {State ? close : open}
    </span>
  );
};

export default ToggleMenuMobile;
