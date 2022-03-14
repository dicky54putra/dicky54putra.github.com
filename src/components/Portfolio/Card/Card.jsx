import React from "react";
import styles from "./Card.module.scss";

export default function Card({ models }) {
  const modelsType = [1, 2, 3];

  let styleType = "";
  if (modelsType[models]) {
    styleType = styles[`model-${modelsType[models]}`];
  }
  return (
    <div className={[styles.card, styleType].join(" ")}>
      <div className={styles.img}>
        <img src="" alt="" />
      </div>
      <div className={styles.content}>
        <a href="/">
          <h2 className={styles.title}>Tacontech Landing Page</h2>
        </a>
        <p className={styles.desc}>
          Tacontech is website company profile for a it solution
        </p>
      </div>
    </div>
  );
}
