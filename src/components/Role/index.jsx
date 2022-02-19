import React from "react";
import styles from "./role.module.scss";

export default function Role() {
  return (
    <div className={styles.role}>
      <span className={styles["role-title"]}>FRONTEND DEVELOPER</span>
    </div>
  );
}
