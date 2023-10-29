import { ReactNode } from "react";

export type TPopup = {
  isActive?: boolean;
  children: ReactNode;
  onClickOverlay?: () => void;
};
