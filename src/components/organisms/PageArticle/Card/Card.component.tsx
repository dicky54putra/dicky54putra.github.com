import { FC } from "react";
import s from "./Card.module.scss";
import { TCard } from "./Card.types";

const Card: FC<TCard> = (props) => {
  const { isRight, imgUrl, url, title, published, minutes, tag } = props;
  return (
    <div className={[s.Card, isRight ? s.C__End : s.C__Start].join(" ")}>
      <div className={s.Img}>
        <img
          src={imgUrl}
          loading="lazy"
          alt={title}
          title={title}
          height={80}
          width={80}
        />
      </div>
      <div className={s.Content}>
        <a href={url} rel="noopener noreferrer" target="_blank">
          <h2 className={s.Title}>{title}</h2>
        </a>
        <p className={s.Tag}>{tag && "#" + tag?.join(" #")}</p>
        <p className={s.Attr}>
          <span>Published:</span> {published}
        </p>
        <p className={s.Attr}>{minutes} min read</p>
      </div>
    </div>
  );
};

export default Card;
