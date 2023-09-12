import { FC } from "react";
import s from "./Role.module.scss";

interface IRole {
  isEndAlign?: boolean;
  text: string;
}

const Role: FC<IRole> = ({ isEndAlign, text }) => {
  return (
    <div className={isEndAlign ? s.WrapperEnd : s.Wrapper}>
      <span className={s.Title}>{text}</span>
    </div>
  );
};

export default Role;
