import { changepath } from "helpers/GlobalState/CmRouter";
import React from "react";
import { useDispatch } from "react-redux";

export default function CLink({ to, children, className }) {
  const dispatch = useDispatch();
  return (
    <span
      className={className}
      onClick={() => dispatch(changepath(to))}
      style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}
