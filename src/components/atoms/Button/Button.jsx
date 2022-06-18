import React from "react";
import CLink from "../CLink";
import styles from "./Button.module.scss";

/**
 *
 * @param {object} param0
 * @param {boolean} [param0.isActive] - className of button
 * @param {any} param0.children - children of button
 * @param {boolean} [param0.isLink]
 * @param {() => void} [param0.onClick]
 * @returns
 */
const Button = ({ children, isActive = false, isLink = false, onClick }) => {
  return !isLink ? (
    <button
      className={[styles.button, isActive ? styles.active : ""].join(" ")}
      onClick={onClick}>
      {children}
    </button>
  ) : (
    <CLink
      to={""}
      className={[styles.button, isActive ? styles.active : ""].join(" ")}>
      {children}
    </CLink>
  );
};

export default Button;
