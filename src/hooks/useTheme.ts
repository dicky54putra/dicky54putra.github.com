import { useEffect } from "react";
import useStore from "./useStore";

const useTheme = () => {
  const {
    theme: { value },
  } = useStore();

  useEffect(() => {
    if (value === "dark") {
      document.body.setAttribute("theme", "dark-theme");
    } else if (value === "light") {
      document.body.setAttribute("theme", "light-theme");
    } else if (value === "trueDark") {
      document.body.setAttribute("theme", "trueDark-theme");
    }

    return () => {
      document.body.setAttribute("theme", "");
    };
  }, [value]);
};

export default useTheme;
