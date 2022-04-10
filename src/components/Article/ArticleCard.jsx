import React from "react";
import styles from "./ArticleCard.module.scss";

/**
 *
 * @param {object} param0
 * @param {boolean} [param0.isRight]
 * @param {string} [param0.imgUrl]
 * @param {string} param0.url
 * @param {string} [param0.title]
 * @param {string} [param0.published]
 * @param {string} [param0.minutes]
 * @param {array} [param0.tag]
 * @returns
 */

export default function ArticleCard({
  isRight,
  imgUrl,
  url,
  title,
  published,
  minutes,
  tag,
}) {
  return (
    <div
      className={[
        styles.card,
        isRight ? styles["c-end"] : styles["c-start"],
      ].join(" ")}>
      <div className={styles.img}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={styles.content}>
        <a href={url} rel="noopener noreferrer" target="_blank">
          <h2 className={styles.title}>{title}</h2>
        </a>
        <p className={styles.tag}>{tag && "#" + tag?.join(" #")}</p>
        <p className={styles.attr}>
          <span>Published:</span> {published}
        </p>
        <p className={styles.attr}>{minutes} min read</p>
      </div>
    </div>
  );
}
