import React from "react";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.skills}>
        {Array(10)
          .fill()
          .map((_, index) => {
            return (
              <img
                key={index}
                className={styles.img}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/yii/yii-plain-wordmark.svg"
                alt="Skill"
              />
            );
          })}
      </div>
    </div>
  );
}
