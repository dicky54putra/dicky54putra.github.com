import React from "react";
import styles from "./ArticleCard.module.scss";

export default function ArticleCard({ isRight }) {
  return (
    <div className={[styles.card, isRight && styles["c-end"]].join(" ")}>
      <div className={styles.img}>
        <img src="" alt="" />
      </div>
      <div className={styles.content}>
        <a href="/">
          <h2 className={styles.title}>
            How to make return loop for in ReactJs
          </h2>
        </a>
        <p className={styles.tag}>#javascript #react #programming #beginners</p>
        <p className={styles.attr}>
          <span>Published:</span> Nov 23 '21
        </p>
        <p className={styles.attr}>1 min read</p>
      </div>
    </div>
  );
}
