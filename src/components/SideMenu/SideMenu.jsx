import CLink from "components/CLink/CLink";
import { selectComp } from "helpers/GlobalState/CmRouter";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./SideMenu.module.scss";

/**
 *
 * @param {object} param0
 * @param {array} [param0.datas]
 * @returns
 */

export default function SideMenu({ datas }) {
  const route = useSelector(selectComp);

  const isActive = (Link) => {
    return Link === route ? styles.active : "";
  };

  return (
    <div className={styles["side-menu"]}>
      <div className={styles["menu-items"]}>
        {datas?.map((data, index) => {
          return (
            <CLink
              key={`menu-item-${index}`}
              to={data.url}
              className={[styles["menu-item"], isActive(data.url)].join(" ")}>
              {data.title}
            </CLink>
          );
        })}
      </div>
    </div>
  );
}
