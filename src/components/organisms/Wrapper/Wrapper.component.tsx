import useGetAllContent from "@hooks/useGetAllContent";
import { FC, ReactNode } from "react";

interface Iwrapper {
  children: ReactNode;
}

const Wrapper: FC<Iwrapper> = (props) => {
  const { children } = props;
  useGetAllContent();

  return <>{children}</>;
};

export default Wrapper;
