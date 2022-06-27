import ArticleCard from "./Card";
import styles from "./Article.module.scss";
import { getArticle } from "helpers/GlobalState/ContentSlice";
import { useSelector } from "react-redux";

export default function Article() {
  const datas = useSelector(getArticle);

  return (
    <div className={styles.article}>
      {datas?.map((data, i) => {
        const isRight = i % 2 !== 0 ? true : false;
        return (
          <ArticleCard
            imgUrl={data.cover_image}
            url={data.url}
            key={i}
            isRight={isRight}
            title={data.title}
            published={data.readable_publish_date}
            minutes={data.reading_time_minutes}
            tag={data.tag_list}
          />
        );
      })}
    </div>
  );
}
