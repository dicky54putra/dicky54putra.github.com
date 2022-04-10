import React from "react";
import styles from "./Role.module.scss";

/**
 *
 * @param {object} param0
 * @param {boolean} [param0.isEndAlign]
 * @param {string} param0.text
 * @returns
 */
export default function Role({ isEndAlign, text }) {
  return (
    <div className={isEndAlign ? styles["role-end"] : styles.role}>
      <span className={styles["role-title"]}>{text}</span>
    </div>
  );
}
