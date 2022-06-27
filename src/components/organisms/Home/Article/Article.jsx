import Button from "components/atoms/Button";
import Card from "components/organisms/Article/Card";
import { getArticle } from "helpers/GlobalState/ContentSlice";
import { useSelector } from "react-redux";
import styles from "./Article.module.scss";

const Article = () => {
  const article = useSelector(getArticle);
  const dataList = article?.slice(0, 3);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Article</h2>
      {dataList?.length > 0 ? (
        <>
          <div className={styles.portfolio}>
            {dataList?.map((item, i) => {
              const isRight = i % 2 ? true : false;
              return (
                <Card
                  key={i}
                  imgUrl={item.cover_image}
                  url={item.url}
                  isRight={isRight}
                  title={item.title}
                  published={item.readable_publish_date}
                  minutes={item.reading_time_minutes}
                  tag={item.tag_list}
                />
              );
            })}
          </div>
          <Button isLink to="/article" className={styles.button}>
            See all Article
          </Button>
        </>
      ) : (
        <h2 className={styles.datanotfound}>Data not found!</h2>
      )}
    </div>
  );
};

export default Article;
