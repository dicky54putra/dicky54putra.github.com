import Role from "@components/atoms/Role";
import Title from "@components/atoms/Title";
import Footer from "@components/molecules/Footer";
import SideMenu from "@components/molecules/SideMenu";
import TopMenu from "@components/molecules/TopMenu";
import useGetAllContent from "@hooks/useGetAllContent";
import useStore from "@hooks/useStore";
import { FC, ReactNode, useEffect, useState } from "react";
import s from "./Wrapper.module.scss";

interface Iwrapper {
  children: ReactNode;
  hasTitle?: boolean;
  hasFooter?: boolean;
  title?: string;
  isCenterRole?: boolean;
}

const Wrapper: FC<Iwrapper> = (props) => {
  const { children, hasTitle, title, isCenterRole, hasFooter } = props;
  const store = useStore();

  const isLoading = store.route.loader;
  const config = store.content.config;
  const thisYear = new Date().getFullYear();
  const [isLoadingIn, setIsLoadingIn] = useState<boolean>(true);

  useGetAllContent();

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingIn(false);
    }, 100);

    return () => {
      setIsLoadingIn(true);
    };
  }, []);

  return (
    <>
      {isLoading && <div className="loader"></div>}
      {isLoadingIn && <div className="loader-in"></div>}
      {!isLoading && !isLoadingIn ? (
        <>
          <TopMenu
            title={config?.title}
            datas={config?.menus}
            open={config?.menu_open}
            close={config?.menu_close}
          />
          <SideMenu datas={config?.socials} />
          <Role
            text={`${config?.role}`}
            isEndAlign={isCenterRole ? false : true}
          />
          <main className={s.main}>
            {hasTitle && <Title text={title ?? ""} />}
            {children}
          </main>
          {hasFooter && <Footer text={`${config?.copyright} ${thisYear}`} />}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Wrapper;
