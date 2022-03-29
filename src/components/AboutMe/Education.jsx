import React from "react";
import Card from "components/AboutMe/Cards/Card";
import styles from "./Education.module.scss";

export default function Education(props) {
  const { data } = props;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.cards}>
        {data?.map((item, i) => {
          const { logo, name, startDate, endDate, major } = item;
          return (
            <Card
              key={i}
              title={name}
              footTitle={major}
              desc=""
              image={logo}
              startDate={startDate}
              endDate={endDate}
            />
          );
        })}
      </div>
    </div>
  );
}
