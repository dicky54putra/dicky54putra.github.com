import { useEffect } from "react";
import { useAppSelector } from "./useAppSelector";

const useFlashlight = () => {
  const value = useAppSelector((s) => s.theme.value);
  const handleMouseMove = (e: any) => {
    window.document.body.style.setProperty("--cursorX", e.clientX + "px");
    window.document.body.style.setProperty("--cursorY", e.clientY + "px");
  };

  useEffect(() => {
    if (value === "trueDark") {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (value === "trueDark") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [value]);
};

export default useFlashlight;
