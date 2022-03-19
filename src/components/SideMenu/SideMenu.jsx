import CLink from "components/CLink/CLink";
import { selectComp } from "helpers/GlobalState/CmRouter";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./SideMenu.module.scss";

export default function SideMenu() {
  const route = useSelector(selectComp);

  const isActive = (Link) => {
    return Link === route ? styles.active : "";
  };

  return (
    <div className={styles["side-menu"]}>
      <div className={styles["menu-items"]}>
        <CLink
          to="/article"
          className={[styles["menu-item"], isActive("/article")].join(" ")}>
          Article
        </CLink>
        <CLink
          to="/portfolio"
          className={[styles["menu-item"], isActive("/portfolio")].join(" ")}>
          Portfolio
        </CLink>
        <CLink
          to="/about-me"
          className={[styles["menu-item"], isActive("/about-me")].join(" ")}>
          About Me
        </CLink>
      </div>
    </div>
  );
}
