import { marked } from "marked";
import { useEffect, useState } from "react";
import s from "./Cv.module.scss";

const Cv = () => {
  const [cv, setCv] = useState("");

  useEffect(() => {
    fetch("/assets/dicky54putra.md")
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setCv(marked(text));
      });
  }, []);

  return (
    <div className={s.Wrapper} dangerouslySetInnerHTML={{ __html: cv }}></div>
  );
};

export default Cv;
