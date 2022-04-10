import React from "react";
import styles from "./Title.module.scss";

export default function Title({ title }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
