import React, { useState } from "react";
import styles from "../TopMenu.module.scss";

/**
 *
 * @param {object} param0
 * @param {string} param0.open
 * @param {string} param0.close
 * @returns
 */
export default function ToggleMenuMobile({ open, close }) {
  const [State, setState] = useState(false);

  const handleClick = () => {
    const menu = document.getElementById("menu");
    const wrapperTopMenu = document.getElementById("wrapper-top-menu");
    const toggleMenuMobile = document.getElementById("toggleMenuMobile");

    setState((State) => !State);
    toggleMenuMobile.style.color = State ? "#fff" : "#000";
    menu.style.transform = State ? "translateX(-100%)" : "translateX(0%)";
    wrapperTopMenu.style.color = State ? "#fff" : "#000";
    if (State) {
      setTimeout(() => {
        wrapperTopMenu.style.mixBlendMode = "difference";
      }, 300);
    } else {
      wrapperTopMenu.style.mixBlendMode = "unset";
    }
    // @ts-ignore
    wrapperTopMenu.style.backdropFilter = State ? "2px" : "none";
  };

  return (
    <span
      id="toggleMenuMobile"
      className={styles["menu-mobile"]}
      onClick={handleClick}>
      {State ? close : open}
    </span>
  );
}
