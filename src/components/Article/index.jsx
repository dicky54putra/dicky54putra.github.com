import React from "react";
import ArticleCard from "./ArticleCard";
import styles from "./index.module.scss";

export default function Article() {
  const data = Array(5).fill();
  return (
    <div className={styles.article}>
      {data.map((_, i) => {
        return <ArticleCard key={i} isRight={i % 2 !== 0 ? true : false} />;
      })}
    </div>
  );
}
