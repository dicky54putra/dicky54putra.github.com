import styles from "./Select.module.scss";

/**
 *
 * @param {object} param0
 * @param {array} param0.lists - List option
 * @param {string} [param0.value] - Value select
 * @param {(any) => void} [param0.onChange]
 * @returns
 */
const Select = ({ lists, value, onChange }) => {
  value = value === null ? "" : value;
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <select
      value={value.toLowerCase()}
      className={styles.select}
      onChange={handleChange}>
      <option value="">Tech Filter</option>
      {lists?.map((item, i) => {
        return (
          <option
            key={`select-${item.name}-${i}`}
            value={item.name?.toLowerCase()}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
