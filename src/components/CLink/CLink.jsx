import { isLoad } from "helpers/GlobalState/CmRouter";
import { changepath } from "helpers/GlobalState/CmRouter";
import React from "react";
import { useDispatch } from "react-redux";

export default function CLink({ to, children, className }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(isLoad(true));
    setTimeout(() => {
      dispatch(isLoad(false));
      dispatch(changepath(to));
    }, 500);
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
