import Button from "components/atoms/Button";
import Card from "components/organisms/Portfolio/Card";
import { getPortfolio } from "helpers/GlobalState/ContentSlice";
import { useSelector } from "react-redux";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const portfolio = useSelector(getPortfolio);
  const dataList = portfolio?.project?.slice(0, 3);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Portfolio</h2>
      {dataList?.length > 0 ? (
        <>
          <div className={styles.portfolio}>
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
          <Button isLink to="/portfolio" className={styles.button}>
            See all Project
          </Button>
        </>
      ) : (
        <h2 className={styles.datanotfound}>Data not found!</h2>
      )}
    </div>
  );
};

export default Portfolio;
