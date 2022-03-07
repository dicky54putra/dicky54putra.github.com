import React from "react";
import styles from "./Role.module.scss";

export default function Role({ isEndAlign }) {
  return (
    <div className={isEndAlign ? styles["role-end"] : styles.role}>
      <span className={styles["role-title"]}>FRONTEND DEVELOPER</span>
    </div>
  );
}
