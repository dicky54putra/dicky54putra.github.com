export type ButtonProp = {
  children: any;
  isActive?: boolean;
  variant?: "primary" | "secondary";
  className?: string;

  isLink?: false;
  to?: string;
  isAnchor?: boolean;
};

export type LinkProp = {
  children: any;
  isActive?: boolean;
  variant?: "primary" | "secondary";
  className?: string;

  isLink?: true;
  to: string;
  isAnchor?: boolean;
};
