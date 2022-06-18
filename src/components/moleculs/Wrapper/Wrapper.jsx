import Footer from "components/moleculs/Footer/Footer";
import Role from "components/atoms/Role";
import SideMenu from "components/moleculs/SideMenu/SideMenu";
import Title from "components/atoms/Title";
import TopMenu from "components/moleculs/TopMenu/TopMenu";
import { isLoader } from "helpers/GlobalState/CmRouterSlice";
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
    let isMounted = true;
    axios.get(`${API_URL}/config.json`).then((res) => {
      if (isMounted) setData(res.data);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {isLoading && <div className="loader"></div>}
      <TopMenu title={data?.title} datas={data?.menus} />
      <SideMenu datas={data?.socials} />
      <Role text={`${data?.role}`} isEndAlign={isCenterRole ? false : true} />
      <main className={styles.main}>
        {hasTitle && <Title title={title} />}
        {children}
      </main>
      {hasFooter && <Footer text={`${data?.copyright} ${thisYear}`} />}
    </>
  );
}
