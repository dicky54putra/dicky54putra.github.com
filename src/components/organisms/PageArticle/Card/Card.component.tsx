import { FC } from "react";
import s from "./Card.module.scss";
import { TCard } from "./Card.types";

const Card: FC<TCard> = (props) => {
  const { isRight, imgUrl, url, title, published, minutes, tag } = props;
  return (
    <div className={[s.card, isRight ? s["c-end"] : s["c-start"]].join(" ")}>
      <div className={s.img}>
        <img
          src={imgUrl}
          loading="lazy"
          alt={title}
          title={title}
          height={80}
          width={80}
        />
      </div>
      <div className={s.content}>
        <a href={url} rel="noopener noreferrer" target="_blank">
          <h2 className={s.title}>{title}</h2>
        </a>
        <p className={s.tag}>{tag && "#" + tag?.join(" #")}</p>
        <p className={s.attr}>
          <span>Published:</span> {published}
        </p>
        <p className={s.attr}>{minutes} min read</p>
      </div>
    </div>
  );
};

export default Card;
