import Button from "@components/atoms/Button";
import Select from "@components/atoms/Select";
import useStore from "@hooks/useStore";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "./Card/Card.component";
import s from "./PagePortfolio.module.scss";
import { TPagePortfolio } from "./PagePortfolio.types";

const PagePortfolio: FC<TPagePortfolio> = (props) => {
  const { data, tech } = props;
  const [dataList, setDataList] = useState(data);

  const store = useStore();
  const dispatch = useDispatch();
  const filter = <store className="content"></store>;

  return (
    <>
      <div className={[s.wrapper, s.select].join(" ")}>
        <Select
          lists={tech}
          value={filter}
          onChange={handleFilter("select-version")}
        />
      </div>
      <div className={[s.wrapper, s.button].join(" ")}>
        {tech?.map((item, i) => {
          return (
            <Button
              key={`${item.name}-${i}`}
              onClick={handleFilter(item.name)}
              isActive={filter?.toLowerCase() === item.name?.toLowerCase()}
            >
              {item.name}
            </Button>
          );
        })}
      </div>
      {dataList?.length > 0 ? (
        <div className={s.portfolio}>
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
        <h2 className={s.datanotfound}>Data not found!</h2>
      )}
    </>
  );
};

export default PagePortfolio;
