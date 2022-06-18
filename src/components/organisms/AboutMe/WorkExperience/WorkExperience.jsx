import React from "react";
import Card from "components/organisms/AboutMe/Cards/Card";
import styles from "./WorkExperience.module.scss";

export default function WorkExperience(props) {
  const { data } = props;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.cards}>
        {data?.map((item, i) => {
          const { position, company, startDate, endDate, jobdesk, logo } = item;
          return (
            <Card
              key={i}
              title={position}
              footTitle={company}
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
