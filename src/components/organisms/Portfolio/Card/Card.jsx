import { RAW_IMAGES } from "helpers/Constant";
import React from "react";
import styles from "./Card.module.scss";

/**
 *
 * @param {object} props
 * @param {number} props.models
 * @param {string} props.image
 * @param {string} props.title
 * @param {string} props.desc
 * @param {string} props.demo
 * @param {string} props.tech
 * @returns
 */

export default function Card(props) {
  const { models, image, title, desc, demo, tech } = props;
  const modelsType = [1, 2, 3];

  let styleType = "";
  if (modelsType[models]) {
    styleType = styles[`model-${modelsType[models]}`];
  }
  return (
    <div className={[styles.card, styleType].join(" ")}>
      <div className={styles.img}>
        <img src={`${RAW_IMAGES}${image}`} alt={title} />
      </div>
      <div className={styles.content}>
        {demo ? (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <h2 className={styles.title}>{title}</h2>
          </a>
        ) : (
          <h2 className={styles.title}>{title}</h2>
        )}
        <p className={styles.desc}>{desc}</p>
        <span className={styles.tech}>{tech}</span>
      </div>
    </div>
  );
}
