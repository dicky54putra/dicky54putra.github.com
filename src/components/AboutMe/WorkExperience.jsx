import React from "react";
import Card from "components/AboutMe/Cards/Card";
import styles from "./WorkExperience.module.scss";

export default function WorkExperience() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.cards}>
        <Card />
        <Card />
      </div>
    </div>
  );
}
