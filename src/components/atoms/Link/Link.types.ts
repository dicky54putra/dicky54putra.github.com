import React, { ReactNode } from "react";

export interface ILink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  to: string;
  className?: string;
  isAnchor?: boolean;
}
