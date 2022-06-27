import Button from "components/atoms/Button";
import Select from "components/atoms/Select";
import {
  ChangePortfolioFilterValue,
  PortfolioFilterValue,
} from "helpers/GlobalState/PortfolioFilterSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import styles from "./Portfolio.module.scss";

export default function Portfolio({ data, tech }) {
  const [dataList, setDataList] = useState(data);
  const dispatch = useDispatch();
  const filter = useSelector(PortfolioFilterValue);

  const handleFilter = (name) => (e) => {
    const newName = name === "select-version" ? e.target.value : name;
    let newData;
    if (newName.toLowerCase() === filter?.toLowerCase()) {
      newData = data;
      dispatch(ChangePortfolioFilterValue(null));
    } else {
      newData = data?.filter((item) => {
        return item.tech.toLowerCase().match(newName.toLowerCase());
      });
      dispatch(ChangePortfolioFilterValue(newName.toLowerCase()));
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
      <div className={[styles.wrapper, styles.select].join(" ")}>
        <Select
          lists={tech}
          value={filter}
          onChange={handleFilter("select-version")}
        />
      </div>
      <div className={[styles.wrapper, styles.button].join(" ")}>
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
      {dataList?.length > 0 ? (
        <div className={styles.portfolio}>
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
        <h2 className={styles.datanotfound}>Data not found!</h2>
      )}
    </>
  );
}
