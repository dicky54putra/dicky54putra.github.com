import React from "react";
import styles from "./Skills.module.scss";

export default function Skills(props) {
  const { data } = props;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.skills}>
        {data?.map((item, i) => {
          const { name, image } = item;
          return <img key={i} className={styles.img} src={image} alt={name} />;
        })}
      </div>
    </div>
  );
}
