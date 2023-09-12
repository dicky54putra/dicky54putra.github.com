import { IContentAboutEducation } from "@store/content/content.types";
import { FC } from "react";
import Card from "../Card";
import s from "./Education.module.scss";

type TEducation = {
  datas?: IContentAboutEducation[];
  title: string;
};
const Education: FC<TEducation> = (props) => {
  const { datas, title } = props;
  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>{title}</h2>
      <div className={s.Cards}>
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
};

export default Education;
