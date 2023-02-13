import { changepath, isLoad } from "@store/routes/routes";
import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { ILink } from "./Link.types";

const Link: FC<ILink> = (props) => {
	const { to, children, className, isAnchor = false, ...attr } = props;
	const dispatch = useDispatch();

	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		dispatch(isLoad(true));
		setTimeout(() => {
			dispatch(isLoad(false));
			dispatch(changepath(to));
		}, 100);
	};

	if (isAnchor) {
		return (
			<a href={to} className={className} {...attr}>
				{children}
			</a>
		);
	}

	return (
		<a href={to} className={className} onClick={handleClick}>
			{children}
		</a>
	);
};

export default Link;
