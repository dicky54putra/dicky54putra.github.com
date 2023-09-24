import Link from "@components/atoms/Link";
import ThemeSwitch from "@components/atoms/ThemeSwitch";
import { useAppSelector } from "@hooks/useAppSelector";
import { setTheme } from "@store/theme/theme";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import SearchResult from "../SearchResult";
import ToggleMenuMobile from "./ToggleMenuMobile";
import s from "./TopMenu.module.scss";
import { TTopMenu } from "./TopMenu.types";

const TopMenu: FC<TTopMenu> = (props) => {
  const { datas, title, open, close } = props;
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const dispatch = useDispatch();
  const route = useAppSelector((s) => s.route.value);

  const isActive = (link: string) => {
    return link === route ? s.Active : "";
  };

  return (
    <>
      <div className={s.TopMenu} id="wrapper-top-menu">
        <div className={s.Title}>
          <Link to="/" className={s.Title}>
            {title}
          </Link>
        </div>
        <ToggleMenuMobile open={open} close={close} />
        <div className={s.MenuItems} id="menu">
          {datas?.map((data, index) => {
            return (
              <Link
                key={`menu-item-${index}`}
                to={data.url}
                className={[s.MenuItem, "menu-item", isActive(data.url)].join(
                  " ",
                )}>
                {data.title}
              </Link>
            );
          })}
          <div className={s.Attr}>
            <button
              className={s.Attr__Item}
              onClick={() => setIsSearchOpen(true)}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.8972 19.7722L17.4867 15.3617C18.5486 13.9481 19.1218 12.2275 19.1199 10.4595C19.1199 5.94359 15.4458 2.26953 10.9299 2.26953C6.41393 2.26953 2.73987 5.94359 2.73987 10.4595C2.73987 14.9755 6.41393 18.6495 10.9299 18.6495C12.6978 18.6515 14.4185 18.0782 15.8321 17.0164L20.2425 21.4269C20.4658 21.6264 20.757 21.733 21.0563 21.7246C21.3556 21.7162 21.6404 21.5936 21.8522 21.3818C22.0639 21.1701 22.1866 20.8853 22.1949 20.586C22.2033 20.2866 22.0968 19.9954 21.8972 19.7722ZM5.07987 10.4595C5.07987 9.30251 5.42296 8.17147 6.06577 7.20945C6.70858 6.24742 7.62222 5.49761 8.69117 5.05484C9.76012 4.61206 10.9364 4.49621 12.0711 4.72194C13.2059 4.94766 14.2483 5.50482 15.0664 6.32296C15.8846 7.14109 16.4417 8.18346 16.6675 9.31825C16.8932 10.453 16.7773 11.6293 16.3346 12.6982C15.8918 13.7672 15.142 14.6808 14.18 15.3236C13.2179 15.9664 12.0869 16.3095 10.9299 16.3095C9.37892 16.3077 7.89203 15.6907 6.79535 14.5941C5.69866 13.4974 5.08173 12.0105 5.07987 10.4595Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              className={s.Attr__Item}
              onClick={() => dispatch(setTheme())}>
              <ThemeSwitch />
            </button>
          </div>
        </div>
      </div>
      <SearchResult isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </>
  );
};

export default TopMenu;
