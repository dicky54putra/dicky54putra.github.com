import Footer from "components/Footer";
import Role from "components/Role";
import SideMenu from "components/SideMenu/SideMenu";
import Title from "components/Title";
import TopMenu from "components/TopMenu";
import React from "react";

export default function Wrapper({ hasFooter, hasTitle, title, children }) {
  return (
    <>
      <TopMenu />
      {hasFooter && <Title />}
      <SideMenu />
      <Role />
      {children}
      {hasFooter && <Footer />}
    </>
  );
}
