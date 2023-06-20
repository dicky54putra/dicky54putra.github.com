import Button from "@components/atoms/Button";
import Card from "@components/organisms/PageArticle/Card";
import useStore from "@hooks/useStore";
import s from "./Article.module.scss";

const Article = () => {
  const store = useStore();
  const article = store.content.article;
  const dataList = article?.slice(0, 3);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Article</h2>
      {dataList?.length && dataList.length > 0 ? (
        <>
          <div className={s.portfolio}>
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
          <Button isLink to="/article" className={s.button}>
            See all Article
          </Button>
        </>
      ) : (
        <h2 className={s.datanotfound}>Data not found!</h2>
      )}
    </div>
  );
};

export default Article;
