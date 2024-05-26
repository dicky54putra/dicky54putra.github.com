import { FC } from "react";
import CardImage from "../CardImage/CardImage.component";
import s from "./Card.module.scss";
import { TCard } from "./Card.types";

const Card: FC<TCard> = (props) => {
  const {
    isRight,
    isGrid = false,
    imgUrl,
    url,
    title,
    published,
    minutes,
    tag,
  } = props;

  console.log(imgUrl);
  return (
    <div
      className={[
        s.Card,
        isRight ? s.C__End : s.C__Start,
        isGrid ? s["Card--Grid"] : "",
      ].join(" ")}>
      <div className={s.Img}>
        {imgUrl ? (
          <img
            src={imgUrl}
            loading="lazy"
            alt={title}
            title={title}
            height={80}
            width={80}
          />
        ) : (
          <CardImage title={title} tags={tag} />
        )}
      </div>
      <div className={s.Content}>
        <a href={url} rel="noopener noreferrer" target="_blank">
          <h2 className={s.Title}>{title}</h2>
        </a>
        <p className={s.Tag}>{tag && tag.map((t) => `#${t}`).join(" ")}</p>
        <p className={s.Attr}>
          <span>Published:</span> {published}
        </p>
        <p className={s.Attr}>{minutes} min read</p>
      </div>
    </div>
  );
};

export default Card;
