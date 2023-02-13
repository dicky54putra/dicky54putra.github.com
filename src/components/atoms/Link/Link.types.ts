import { ReactNode } from "react";

export interface ILink {
	children: ReactNode;
	to: string;
	className?: string;
	isAnchor?: boolean;
}
