import CLink from "components/CLink/CLink";
import ToggleMenuMobile from "components/TopMenu/ToggleMenuMobile";
import React from "react";
import styles from "./TopMenu.module.scss";

/**
 *
 * @param {object} param0
 * @param {array} [param0.datas]
 * @param {string} param0.title
 * @returns
 */

export default function TopMenu({ datas, title }) {
  return (
    <div className={styles["top-menu"]} id="wrapper-top-menu">
      <div className={styles.title}>
        <CLink to="/" className={styles.title}>
          {title}
        </CLink>
      </div>
      <ToggleMenuMobile />
      <div className={styles["menu-items"]} id="menu">
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
