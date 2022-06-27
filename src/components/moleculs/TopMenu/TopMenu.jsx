import CLink from "components/atoms/CLink";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./TopMenu.module.scss";
import { selectComp } from "helpers/GlobalState/CmRouterSlice";
import ToggleMenuMobile from "./ToggleMenuMobile";
import Translate from "components/atoms/Translate";

/**
 *
 * @param {object} param0
 * @param {array} [param0.datas]
 * @param {string} param0.title
 * @param {string} param0.open
 * @param {string} param0.close
 * @param {boolean} param0.isLangDark
 * @returns
 */

export default function TopMenu({ datas, title, open, close, isLangDark }) {
  const route = useSelector(selectComp);

  const isActive = (link) => {
    return link === route ? styles.active : "";
  };

  return (
    <div className={styles["top-menu"]} id="wrapper-top-menu">
      <div className={styles.title}>
        <CLink to="/" className={styles.title}>
          {title}
        </CLink>
      </div>
      <ToggleMenuMobile open={open} close={close} />
      <div className={styles["menu-items"]} id="menu">
        {datas?.map((data, index) => {
          return (
            <CLink
              key={`menu-item-${index}`}
              to={data.url}
              className={[
                styles["menu-item"],
                "menu-item",
                isActive(data.url),
              ].join(" ")}>
              {data.title}
            </CLink>
          );
        })}
        {isLangDark && (
          <>
            <span className={styles.divider}></span>
            <Translate />
          </>
        )}
      </div>
    </div>
  );
}

TopMenu.defaultProps = {
  isLangDark: false,
};
