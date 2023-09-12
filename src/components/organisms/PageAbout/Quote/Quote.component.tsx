import { FC } from "react";
import s from "./Quote.module.scss";

type TQuote = {
  data?: {
    email: string;
    link: string;
    text: string;
  };
};
const Quote: FC<TQuote> = ({ data }) => {
  return (
    <div className={s.Wrapper}>
      <p>
        {data?.text} <a href={data?.link}>{data?.email}</a>
      </p>
    </div>
  );
};

export default Quote;
