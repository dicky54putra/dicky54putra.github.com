import Button from "@components/atoms/Button";
import Card from "@components/organisms/PagePortfolio/Card";
import useStore from "@hooks/useStore";
import s from "./Portfolio.module.scss";

const Portfolio = () => {
  const store = useStore();
  const portfolio = store.content.portfolio;
  const dataList = portfolio?.project.slice(0, 3);

  return (
    <div className={s.container}>
      <h2 className={s.title}>{portfolio?.title}</h2>
      {dataList?.length && dataList.length > 0 ? (
        <>
          <div className={s.portfolio}>
            {dataList?.map((item, i) => {
              const models = i % 2 ? 2 : 0;
              return (
                <Card
                  key={i}
                  models={models}
                  image={item.cover}
                  demo={item.demo}
                  desc={item.desc}
                  title={item.title}
                  tech={item.tech}
                />
              );
            })}
          </div>
          <Button isLink to="/portfolio" className={s.button}>
            See all Project
          </Button>
        </>
      ) : (
        <h2 className={s.datanotfound}>Data not found!</h2>
      )}
    </div>
  );
};

export default Portfolio;
