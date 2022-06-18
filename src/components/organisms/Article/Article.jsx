import axios from "axios";
import { DEVTO_URL } from "helpers/Constant";
import { useEffect, useState } from "react";
import ArticleCard from "./Card";
import styles from "./Article.module.scss";

export default function Article() {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    let isMounted = true;
    axios.get(DEVTO_URL).then((res) => {
      if (isMounted) setDatas(res.data);
    });

    return () => {
      isMounted = false;
    };
  }, []);
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
