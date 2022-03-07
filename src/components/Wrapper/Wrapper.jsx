import Footer from "components/Footer";
import Role from "components/Role/Role";
import SideMenu from "components/SideMenu/SideMenu";
import Title from "components/Title/Title";
import TopMenu from "components/TopMenu";
import { isLoader } from "helpers/GlobalState/CmRouter";
import React from "react";
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

  return (
    <>
      {isLoading && <div className={styles.loader}></div>}
      <TopMenu />
      {hasTitle && <Title title={title} />}
      <SideMenu />
      <Role isEndAlign={isCenterRole ? false : true} />
      {children}
      {hasFooter && <Footer />}
    </>
  );
}
