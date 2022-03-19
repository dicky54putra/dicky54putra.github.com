import React from "react";
import styles from "./Card.modules.scss";

export default function Card() {
  return (
    <div className="wrapper">
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="content">
        <h3 className="title">sad</h3>
        <p className="desc"></p>
        <p className="attr">
          {" "}
          <span className="main"></span>
        </p>
      </div>
    </div>
  );
}
