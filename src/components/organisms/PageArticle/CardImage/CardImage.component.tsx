import s from "./CardImage.module.scss";
type CardImageProps = {
  title?: string;
  tags?: string[];
};
const CardImage = (props: CardImageProps) => {
  const { title, tags } = props;
  return (
    <div className={s._Main}>
      <p className={s._Main__Title}>{title}</p>
      <div className={s._Main__Foot}>
        <p className={s._Main__Foot__Credit}>dicky54putra</p>
        <div className={s._Main__Foot__Tags}>
          {tags && tags.map((t) => <span key={t}>{`#${t}`}</span>)}
        </div>
      </div>
    </div>
  );
};

export default CardImage;
