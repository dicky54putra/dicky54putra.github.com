import React from "react";
import Card from "components/organisms/AboutMe/Cards/Card";
import styles from "./WorkExperience.module.scss";

/**
 *
 * @param {object} props
 * @param {Array} props.datas
 * @param {string} props.title
 * @returns
 */
const WorkExperience = (props) => {
  const { datas, title } = props;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cards}>
        {datas?.map((item, i) => {
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
};

export default WorkExperience;
