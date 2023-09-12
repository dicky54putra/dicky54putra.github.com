import Link from "@components/atoms/Link";
import { FC } from "react";
import s from "./SideMenu.module.scss";
import { TSideMenu } from "./SideMenu.types";

const SideMenu: FC<TSideMenu> = (props) => {
  const { datas } = props;
  return (
    <div className={s.SideMenu}>
      <div className={s.MenuItems}>
        {datas?.map((data, index) => {
          return (
            <Link
              isAnchor
              key={`menu-item-${index}`}
              to={data.url}
              className={[s.MenuItem].join(" ")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
