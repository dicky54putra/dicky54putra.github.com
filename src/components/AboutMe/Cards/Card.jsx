import React from "react";
import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src="" alt="" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Tacontech Landing Page</h3>
        <p className={styles.desc}>
          Slicing the design form figma or Adobe XD to static web and make
          responsive view.
        </p>
        <p className={styles.attr}>
          <span className={styles.main}>MADEINDONESIA • </span>
          Juny 2021 - Now
        </p>
      </div>
    </div>
  );
}
