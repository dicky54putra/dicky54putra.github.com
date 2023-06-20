import Link from "@components/atoms/Link";
import Translate from "@components/atoms/Translate";
import useStore from "@hooks/useStore";
import { FC } from "react";
import ToggleMenuMobile from "./ToggleMenuMobile";
import s from "./TopMenu.module.scss";
import { TTopMenu } from "./TopMenu.types";

const TopMenu: FC<TTopMenu> = (props) => {
  const { datas, title, open, close, isLangDark } = props;

  const store = useStore();
  const route = store.route.value;

  const isActive = (link: string) => {
    return link === route ? s.active : "";
  };

  return (
    <div className={s["top-menu"]} id="wrapper-top-menu">
      <div className={s.title}>
        <Link to="/" className={s.title}>
          {title}
        </Link>
      </div>
      <ToggleMenuMobile open={open} close={close} />
      <div className={s["menu-items"]} id="menu">
        {datas?.map((data, index) => {
          return (
            <Link
              key={`menu-item-${index}`}
              to={data.url}
              className={[s["menu-item"], "menu-item", isActive(data.url)].join(
                " "
              )}
            >
              {data.title}
            </Link>
          );
        })}
        {isLangDark && (
          <>
            <span className={s.divider}></span>
            <Translate />
          </>
        )}
      </div>
    </div>
  );
};

export default TopMenu;
