import React from "react";
import Card from "components/organisms/AboutMe/Cards/Card";
import styles from "./Education.module.scss";

/**
 *
 * @param {object} props
 * @param {Array} props.datas
 * @param {string} props.title
 * @returns
 */
export default function Education(props) {
  const { datas, title } = props;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cards}>
        {datas?.map((item, i) => {
          const { logo, name, startDate, endDate, major, jobdesk } = item;
          return (
            <Card
              key={i}
              title={name}
              footTitle={major}
              desc={jobdesk}
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
