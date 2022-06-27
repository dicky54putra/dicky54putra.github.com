import React from "react";
import styles from "./Quote.module.scss";

export default function Quote({ data }) {
  return (
    <div className={styles.wrapper}>
      <p>
        {data?.text} <a href={data?.link}>{data?.email}</a>
      </p>
    </div>
  );
}
