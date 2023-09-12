import { IContentAboutSkills } from "@store/content/content.types";
import { FC } from "react";
import s from "./Skill.module.scss";

type TSkill = {
  datas?: IContentAboutSkills[];
  title: string;
};
const Skill: FC<TSkill> = (props) => {
  const { datas, title } = props;

  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>{title}</h2>

      <div className={s.Skills}>
        {datas?.map((item, i) => {
          const { name, image } = item;
          return (
            <img
              key={i}
              className={s.Img}
              src={image}
              alt={name}
              height={80}
              width={80}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
