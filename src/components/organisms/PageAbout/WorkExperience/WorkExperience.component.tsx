import { IContentAboutWorkExperience } from "@store/content/content.types";
import { FC } from "react";
import Card from "../Card";
import s from "./WorkExperience.module.scss";

type TWorkExperience = {
  datas?: IContentAboutWorkExperience[];
  title: string;
};
const WorkExperience: FC<TWorkExperience> = (props) => {
  const { datas, title } = props;
  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>{title}</h2>
      <div className={s.Cards}>
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
