import React from "react";
import CLink from "../CLink";
import styles from "./Button.module.scss";

/**
 * @typedef {Object} InitialPropLink
 * @property {true} [isLink]
 * @property {boolean} [isActive]
 * @property {'primary' | 'secondary'} [variant]
 * @property {string} to
 *
 * @typedef {Object} InitialProp
 * @property {any} children
 * @property {boolean} [isActive]
 * @property {false} [isLink]
 * @property {'primary' | 'secondary'} [variant]
 * @property {string} [to]
 *
 * @typedef {React.ButtonHTMLAttributes} ReactBtn
 *
 * @param  { InitialProp | InitialPropLink & ReactBtn} props
 * @returns
 */
const Button = ({ children, isActive, isLink, variant, to, ...attr }) => {
  const cls = [
    styles.button,
    isActive ? styles.secondary : null,
    styles[variant],
  ];

  return !isLink ? (
    <button className={cls.join(" ")} {...attr}>
      {children}
    </button>
  ) : (
    <CLink to={""} className={cls.join(" ")} {...attr}>
      {children}
    </CLink>
  );
};

Button.defaultProps = {
  isActive: false,
  isLink: false,
  variant: "primary",
};

export default Button;
