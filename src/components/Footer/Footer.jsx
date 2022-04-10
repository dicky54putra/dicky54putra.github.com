import React from "react";
import styles from "./Footer.module.scss";

/**
 *
 * @param {object} param0
 * @param {string} param0.text
 * @returns
 */
export default function Footer({ text }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.footer}>{text}</p>
    </div>
  );
}
