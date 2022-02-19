import React from "react";
import styles from "./topMenu.module.scss";

export default function TopMenu() {
  return (
    <div className={styles["top-menu"]}>
      <div className={styles.title}>Dicky54putra</div>
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
