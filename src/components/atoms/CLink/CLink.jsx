import { isLoad } from "helpers/GlobalState/CmRouterSlice";
import { changepath } from "helpers/GlobalState/CmRouterSlice";
import React from "react";
import { useDispatch } from "react-redux";

/**
 * @typedef  { Object } props
 * @property  { string } to
 * @property  { any } children
 * @property  { string } [className]
 * @property  { boolean } [isAnchor]
 *
 * @param {props & React.AnchorHTMLAttributes} props
 * @returns
 */
const CLink = ({ to, children, className, isAnchor, ...attr }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(isLoad(true));
    setTimeout(() => {
      // @ts-ignore
      dispatch(isLoad(false));
      dispatch(changepath(to));
    }, 500);
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

CLink.defaultProps = {
  isAnchor: false,
};

export default CLink;
