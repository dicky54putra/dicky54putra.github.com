import Footer from "components/moleculs/Footer/Footer";
import Role from "components/atoms/Role";
import SideMenu from "components/moleculs/SideMenu/SideMenu";
import Title from "components/atoms/Title";
import TopMenu from "components/moleculs/TopMenu/TopMenu";
import { isLoader } from "helpers/GlobalState/CmRouterSlice";
import styles from "./Wrapper.module.scss";
import { useSelector } from "react-redux";
import { getConfig } from "helpers/GlobalState/ContentSlice";
import { useEffect, useState } from "react";

/**
 *
 * @param {object} param0
 * @param {boolean} [param0.hasFooter]
 * @param {boolean} [param0.hasTitle]
 * @param {string} [param0.title]
 * @param {any} param0.children
 * @param {boolean} [param0.isCenterRole]
 * @returns
 */

export default function Wrapper({
  hasFooter,
  hasTitle,
  title,
  children,
  isCenterRole,
}) {
  const isLoading = useSelector(isLoader);
  const config = useSelector(getConfig);
  const thisYear = new Date().getFullYear();
  const [isLoadingIn, setIsLoadingIn] = useState(true);

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
          <main className={styles.main}>
            {hasTitle && <Title title={title} />}
            {children}
          </main>
          {hasFooter && <Footer text={`${config?.copyright} ${thisYear}`} />}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
