import Button from "@components/atoms/Button";
import Select from "@components/atoms/Select";
import { useAppSelector } from "@hooks/useAppSelector";
import { changePortfolioFilterValue } from "@store/portfolioFilter/portfolioFilter";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "./Card/Card.component";
import s from "./PagePortfolio.module.scss";
import { TPagePortfolio } from "./PagePortfolio.types";

const PagePortfolio: FC<TPagePortfolio> = (props) => {
  const { data, tech } = props;
  const [dataList, setDataList] = useState(data);

  const dispatch = useDispatch();
  const filter = useAppSelector((s) => s.portfolioFilter.value);

  const handleFilter = (name: string) => (e: any) => {
    const newName = name === "select-version" ? e.target.value : name;
    let newData;
    if (newName.toLowerCase() === filter?.toLowerCase()) {
      newData = data;
      dispatch(changePortfolioFilterValue(null));
    } else {
      newData = data?.filter((item) => {
        return item.tech.toLowerCase().match(newName.toLowerCase());
      });
      dispatch(changePortfolioFilterValue(newName.toLowerCase()));
    }

    setDataList(newData);
  };

  useEffect(() => {
    if (filter === null) {
      setDataList(data);
    } else {
      const newData = data?.filter((item) => {
        return item.tech.toLowerCase().match(filter.toLowerCase());
      });
      setDataList(newData);
    }
  }, [data, filter]);

  return (
    <>
      <div id="page-portfolio" className={[s.Wrapper, s.Select].join(" ")}>
        <Select
          lists={tech}
          value={filter ?? ""}
          onChange={handleFilter("select-version")}
        />
      </div>
      <div className={[s.Wrapper, s.Button].join(" ")}>
        {tech?.map((item, i) => {
          return (
            <Button
              key={`${item.name}-${i}`}
              onClick={handleFilter(item.name)}
              isActive={filter?.toLowerCase() === item.name?.toLowerCase()}>
              {item.name}
            </Button>
          );
        })}
      </div>
      {dataList ? (
        dataList.length > 0 ? (
          <div className={s.Portfolio}>
            {dataList?.map((item, i) => {
              const models = i % 3;
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
        ) : (
          <h2 className={s.DataNotFound}>Data not found!</h2>
        )
      ) : (
        <h2 className={s.DataNotFound}>Data not found!</h2>
      )}
    </>
  );
};

export default PagePortfolio;
