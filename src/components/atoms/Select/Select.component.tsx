import { FC } from "react";
import s from "./Select.module.scss";
import { TSelect } from "./Select.types";

const Select: FC<TSelect> = (props) => {
  const { lists, value, onChange } = props;

  const newValue = value === null ? "" : value;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };

  return (
    <select
      value={newValue.toLowerCase()}
      className={s.Select}
      onChange={handleChange}
    >
      <option value="">Tech Filter</option>
      {lists?.map((item, i) => {
        return (
          <option
            key={`select-${item.name}-${i}`}
            value={item.name?.toLowerCase()}
          >
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
