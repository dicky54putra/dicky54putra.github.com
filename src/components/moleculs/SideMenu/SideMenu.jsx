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
            <a
              key={`menu-item-${index}`}
              href={data.url}
              className={[styles["menu-item"], "menu-item"].join(" ")}
              target="_blank"
              rel="noopener noreferrer">
              {data.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
