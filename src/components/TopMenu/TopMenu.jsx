import CLink from "components/CLink/CLink";
import ToggleMenuMobile from "components/TopMenu/ToggleMenuMobile";
import React from "react";
import styles from "./TopMenu.module.scss";

export default function TopMenu() {
  return (
    <div className={styles["top-menu"]} id="wrapper-top-menu">
      <div className={styles.title}>
        <CLink to="/" className={styles.title}>
          Dicky54putra{" "}
        </CLink>
      </div>
      <ToggleMenuMobile />
      <div className={styles["menu-items"]} id="menu">
        <a
          href="https://id.linkedin.com/in/dicky54putra"
          className={[styles["menu-item"], "menu-item"].join(" ")}
          target="_blank"
          rel="noopener noreferrer">
          Linkedin
        </a>
        <a
          href="https://id.linkedin.com/in/dicky54putra"
          className={[styles["menu-item"], "menu-item"].join(" ")}
          target="_blank"
          rel="noopener noreferrer">
          instagram
        </a>
        <a
          href="https://id.linkedin.com/in/dicky54putra"
          className={[styles["menu-item"], "menu-item"].join(" ")}
          target="_blank"
          rel="noopener noreferrer">
          github
        </a>
        <a
          href="https://id.linkedin.com/in/dicky54putra"
          className={[styles["menu-item"], "menu-item"].join(" ")}
          target="_blank"
          rel="noopener noreferrer">
          e-mail
        </a>
      </div>
    </div>
  );
}
