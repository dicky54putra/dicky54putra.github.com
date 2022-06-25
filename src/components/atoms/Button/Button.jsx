import React from "react";
import CLink from "../CLink";
import styles from "./Button.module.scss";

/**
 * @typedef {import("./ButtonT").ButtonProp} ButtonProp
 * @typedef {import("./ButtonT").LinkProp} LinkProp
 *
 * @param  { ButtonProp | LinkProp & React.ButtonHTMLAttributes & React.AnchorHTMLAttributes} props
 * @returns
 */
const Button = (props) => {
  const {
    children,
    isActive,
    isLink,
    variant,
    isAnchor,
    to,
    className,
    ...attr
  } = props;

  const cls = [
    styles.button,
    isActive ? styles.secondary : null,
    styles[variant],
    className,
  ];

  return !isLink ? (
    <button className={cls.join(" ")} {...attr}>
      {children}
    </button>
  ) : (
    <CLink to={to} isAnchor={isAnchor} className={cls.join(" ")} {...attr}>
      {children}
    </CLink>
  );
};

Button.defaultProps = {
  isActive: false,
  isLink: false,
  variant: "primary",
  isAnchor: false,
};

export default Button;
