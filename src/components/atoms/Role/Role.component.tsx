import { FC } from "react";
import s from "./Role.module.scss";

interface IRole {
  isEndAlign?: boolean;
  text: string;
}

const Role: FC<IRole> = ({ isEndAlign, text }) => {
  return (
    <div className={isEndAlign ? s._WrapperEnd : s._Wrapper}>
      <span className={s._Title}>{text}</span>
    </div>
  );
};

export default Role;
