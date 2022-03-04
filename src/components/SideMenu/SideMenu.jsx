import CLink from "components/CLink/CLink";
import React from "react";
import styles from "./SideMenu.module.scss";

export default function SideMenu() {
  return (
    <div className={styles["side-menu"]}>
      <div className={styles["menu-items"]}>
        <CLink to="/article" className={styles["menu-item"]}>
          Article
        </CLink>
        <CLink to="/portfolio" className={styles["menu-item"]}>
          Portfolio
        </CLink>
        <CLink to="/about-me" className={styles["menu-item"]}>
          About Me
        </CLink>
      </div>
    </div>
  );
}
