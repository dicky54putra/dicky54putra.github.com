import Footer from "components/Footer/Footer";
import Role from "components/Role/Role";
import SideMenu from "components/SideMenu/SideMenu";
import Title from "components/Title/Title";
import TopMenu from "components/TopMenu/TopMenu";
import { isLoader } from "helpers/GlobalState/CmRouter";
import { useEffect, useState } from "react";
import styles from "./Wrapper.module.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "helpers/Constant";

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
  const [data, setData] = useState(null);

  const thisYear = new Date().getFullYear();

  useEffect(() => {
    axios.get(`${API_URL}/config.json`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      {isLoading && <div className="loader"></div>}
      <TopMenu title={data?.title} datas={data?.socials} />
      <SideMenu datas={data?.menus} />
      <Role text={`${data?.role}`} isEndAlign={isCenterRole ? false : true} />
      <main className={styles.main}>
        {hasTitle && <Title title={title} />}
        {children}
      </main>
      {hasFooter && <Footer text={`${data?.copyright} ${thisYear}`} />}
    </>
  );
}
