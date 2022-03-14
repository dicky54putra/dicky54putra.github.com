import React from "react";
import Card from "./Card/Card";
import styles from "./Portfolio.module.scss";

export default function Portfolio() {
  const data = Array(5).fill();
  return (
    <div className={styles.portfolio}>
      {data.map((_, i) => {
        const models = i % 3;
        return <Card key={i} models={models} />;
      })}
    </div>
  );
}
