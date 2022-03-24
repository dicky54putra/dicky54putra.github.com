import React from "react";
import Card from "components/AboutMe/Cards/Card";
import styles from "./Education.module.scss";

export default function Education() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.cards}>
        <Card />
      </div>
    </div>
  );
}
