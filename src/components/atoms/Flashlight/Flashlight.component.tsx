import { useEffect, useState } from "react";
import s from "./Flashlight.module.scss";

const Flashlight = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    window.document.body.style.setProperty("--cursorX", e.clientX + "px");
    window.document.body.style.setProperty("--cursorY", e.clientY + "px");
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={s.FlashlightContainer}>
      <div
        className={s.DarkOverlay}
        style={
          {
            // left: cursorPosition.x + "px",
            // top: cursorPosition.y + "px",
          }
        }></div>
      <div
        className={s.Flashlight}
        style={{
          left: cursorPosition.x + "px",
          top: cursorPosition.y + "px",
        }}></div>
    </div>
  );
};

export default Flashlight;
