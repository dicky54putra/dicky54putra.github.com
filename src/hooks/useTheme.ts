import { useEffect } from "react";
import { useAppSelector } from "./useAppSelector";

const useTheme = () => {
  const value = useAppSelector((s) => s.theme.value);

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
