import React from "react";
import styles from "./Name.module.scss";

export default function Name() {
  return (
    <div className={styles["name-wrapper"]}>
      <span className={styles.d}>D</span>
      <span className={styles.i}>I</span>
      <span className={styles.c}>C</span>
      <span className={styles.k}>K</span>
      <span className={styles.y}>Y</span>
      <span className={styles.s5}>5</span>
      <span className={styles.s4}>4</span>
      <span className={styles.p}>P</span>
      <span className={styles.u}>U</span>
      <span className={styles.t}>T</span>
      <span className={styles.r}>R</span>
      <span className={styles.a}>A</span>
    </div>
  );
}
