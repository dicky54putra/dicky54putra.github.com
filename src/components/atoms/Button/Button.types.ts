import { AnchorHTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

export interface IButton extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive?: boolean;
  variant?: "Primary" | "Secondary";
  className?: string;

  isLink?: boolean;
  to?: string;
  isAnchor?: boolean;
}

export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  isActive?: boolean;
  variant?: "Primary" | "Secondary";
  className?: string;

  isLink?: boolean;
  to: string;
  isAnchor?: boolean;
}

export type TButton = IButton | ILink;
