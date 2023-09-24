import Button from "@components/atoms/Button";
import Card from "@components/organisms/PageArticle/Card";
import { useAppSelector } from "@hooks/useAppSelector";
import s from "./Article.module.scss";

const Article = () => {
  const article = useAppSelector((s) => s.content.article);
  const dataList = article?.slice(0, 3);

  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Article</h2>
      {dataList?.length && dataList.length > 0 ? (
        <>
          <div className={s.Article}>
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
          <Button isLink to="/article" className={s.Button}>
            See all Article
          </Button>
        </>
      ) : (
        <h2 className={s.DataNotFound}>Data not found!</h2>
      )}
    </div>
  );
};

export default Article;
