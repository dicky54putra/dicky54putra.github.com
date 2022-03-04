import CLink from "components/CLink/CLink";
import React from "react";
import styles from "./topMenu.module.scss";

export default function TopMenu() {
  // return "";
  return (
    <div className={styles["top-menu"]}>
      <div className={styles.title}>
        <CLink to="/">Dicky54putra </CLink>
      </div>
      <div className={styles["menu-items"]}>
        <a
          href="https://id.linkedin.com/in/dicky54putra"
          className={styles["menu-item"]}
          target="_blank"
          rel="noopener noreferrer">
          Linkedin
        </a>
        <a
          href="https://id.linkedin.com/in/dicky54putra"
          className={styles["menu-item"]}
          target="_blank"
          rel="noopener noreferrer">
          instagram
        </a>
        <a
          href="https://id.linkedin.com/in/dicky54putra"
          className={styles["menu-item"]}
          target="_blank"
          rel="noopener noreferrer">
          github
        </a>
        <a
          href="https://id.linkedin.com/in/dicky54putra"
          className={styles["menu-item"]}
          target="_blank"
          rel="noopener noreferrer">
          e-mail
        </a>
      </div>
    </div>
  );
}
