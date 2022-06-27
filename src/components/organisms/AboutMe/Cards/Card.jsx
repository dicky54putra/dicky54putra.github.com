import { RAW_IMAGES } from "helpers/Constant";
import React from "react";
import styles from "./Card.module.scss";

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.image
 * @param {string} props.desc
 * @param {string} props.footTitle
 * @param {string} props.startDate
 * @param {string} props.endDate
 * @returns
 */
export default function Card(props) {
  const { image, title, desc, footTitle, startDate, endDate } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src={`${RAW_IMAGES}${image}`} alt={image} height={80} width={80} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.attr}>
          <span className={styles.main}>{footTitle} • </span>
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
}
