import React from "react";
import styles from "./AboutMe.module.scss";

export default function AboutMe(props) {
  const { desc, image } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
        <img src={`images/${image}`} alt="Profile" />
      </div>

      <p className={styles.desc}>{desc}</p>

      <hr />
    </div>
  );
}
