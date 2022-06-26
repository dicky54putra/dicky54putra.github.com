import React from "react";
import styles from "./Skills.module.scss";

/**
 *
 * @param {object} props
 * @param {Array} props.datas
 * @param {string} props.title
 * @returns
 */
export default function Skills(props) {
  const { datas, title } = props;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.skills}>
        {datas?.map((item, i) => {
          const { name, image } = item;
          return (
            <img
              key={i}
              className={styles.img}
              src={image}
              alt={name}
              height={80}
              width={80}
            />
          );
        })}
      </div>
    </div>
  );
}
