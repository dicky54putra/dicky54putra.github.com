import CLink from "components/atoms/CLink";
import React from "react";
import styles from "./SideMenu.module.scss";

/**
 *
 * @param {object} param0
 * @param {array} [param0.datas]
 * @returns
 */

export default function SideMenu({ datas }) {
  return (
    <div className={styles["side-menu"]}>
      <div className={styles["menu-items"]}>
        {datas?.map((data, index) => {
          return (
            <CLink
              isAnchor
              key={`menu-item-${index}`}
              to={data.url}
              className={[styles["menu-item"]].join(" ")}
              target="_blank"
              rel="noopener noreferrer">
              {data.title}
            </CLink>
          );
        })}
      </div>
    </div>
  );
}
