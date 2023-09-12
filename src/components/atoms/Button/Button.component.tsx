import clsx from "clsx";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import Link from "../Link";
import s from "./Button.module.scss";
import { TButton } from "./Button.types";

const Button: FC<TButton> = (props) => {
  const {
    children,
    isActive = false,
    isLink = false,
    variant = "Primary",
    isAnchor = false,
    to = "/",
    className,
    ...attr
  } = props;

  const cls = clsx(
    s.Button,
    isActive ? s.Secondary : null,
    s[variant],
    className
  );

  return !isLink ? (
    <button
      type="button"
      className={cls}
      {...(attr as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  ) : (
    <Link
      to={to}
      isAnchor={isAnchor}
      className={cls}
      {...(attr as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </Link>
  );
};

export default Button;
