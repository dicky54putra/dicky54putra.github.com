import React from "react";
import Card from "./Card/Card";
import styles from "./Portfolio.module.scss";

export default function Portfolio({ data }) {
  return (
    <div className={styles.portfolio}>
      {data?.map((item, i) => {
        const models = i % 3;
        return (
          <Card
            key={i}
            models={models}
            image={item.cover}
            demo={item.demo}
            desc={item.desc}
            title={item.title}
          />
        );
      })}
    </div>
  );
}
