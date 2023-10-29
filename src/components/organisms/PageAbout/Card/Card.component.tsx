import { RAW_IMAGES } from "@/constant/generals";
import { FC } from "react";
import s from "./Card.module.scss";

type TCard = {
  image: string;
  title: string;
  desc: string;
  footTitle: string;
  startDate: string;
  endDate: string;
};
const Card: FC<TCard> = (props) => {
  const { image, title, desc, footTitle, startDate, endDate } = props;
  return (
    <div className={s.Wrapper}>
      <div className={s.Img}>
        <img
          src={`${RAW_IMAGES}/${image}`}
          alt={image}
          height={80}
          width={80}
        />
      </div>
      <div className={s.Content}>
        <h3 className={s.Title}>{title}</h3>
        <p className={s.Desc}>{desc}</p>
        <p className={s.Attr}>
          <span className={s.Main}>{footTitle} • </span>
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

export default Card;
