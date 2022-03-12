import Footer from "components/Footer/Footer";
import Role from "components/Role/Role";
import SideMenu from "components/SideMenu/SideMenu";
import Title from "components/Title/Title";
import TopMenu from "components/TopMenu/TopMenu";
import { isLoader } from "helpers/GlobalState/CmRouter";
import React, { useEffect } from "react";
import styles from "./Wrapper.module.scss";
import { useSelector } from "react-redux";

export default function Wrapper({
  hasFooter,
  hasTitle,
  title,
  children,
  isCenterRole,
}) {
  const isLoading = useSelector(isLoader);

  useEffect(() => {
    if (isLoading) {
      return <div className={styles.loader}></div>;
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <div className={styles.loader}></div>}
      <TopMenu />
      <SideMenu />
      <Role isEndAlign={isCenterRole ? false : true} />
      <main className={styles.main}>
        {hasTitle && <Title title={title} />}
        {children}
      </main>
      {hasFooter && <Footer />}
    </>
  );
}
