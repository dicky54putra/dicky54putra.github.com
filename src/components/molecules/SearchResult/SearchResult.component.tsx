import useSearch from "@hooks/useSearch";
import useStore from "@hooks/useStore";
import clsx from "clsx";
import { FC } from "react";
import s from "./SearchResult.module.scss";
import { TSearchResult } from "./SearchResult.type";

const SearchResult: FC<TSearchResult> = (props) => {
  const { isOpen, setIsOpen } = props;

  const {
    content: { article, portfolio },
  } = useStore();

  const options = {
    includeScore: false,
    keys: [
      {
        name: "title",
        weight: 0.7,
      },
      {
        name: "tag_list",
        weight: 0.3,
      },
    ],
  };
  const articleSearch = useSearch({
    options: options,
    lists: article ?? [],
  });

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    articleSearch.onSearch(e);
  };

  return (
    <div className={clsx(s.Wrapper, isOpen ? s.Open : "")}>
      <div className={s.Component}>
        <div className={s.Head}>
          <input
            type="text"
            placeholder="Search dicky54putra.github.io"
            onInput={handleSearch}
          />
        </div>
        <div className={s.Body}>
          {articleSearch.result.length > 0 && (
            <div className={s.Body__SearchHits}>
              <p className={s.Body__SearchHits__Title}>Article</p>
              <ul className={s.Body__SearchList}>
                {articleSearch.result.map((item) => {
                  return (
                    <li key={item.item.id} className={s.Body__SearchList__Item}>
                      <p className={s.Body__SearchList__Item__Title}>
                        {item.item.title}
                      </p>
                      <p className={s.Body__SearchList__Item__Attr}>
                        {item.item.tags}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {/* <div className={s.Body__SearchHits}>
            <p className={s.Body__SearchHits__Title}>Portfolio</p>
            <ul className={s.Body__SearchList}>
              <li className={s.Body__SearchList__Item}>
                <p className={s.Body__SearchList__Item__Title}>
                  How to Blablabla
                </p>
                <p className={s.Body__SearchList__Item__Attr}>JS, Docs</p>
              </li>
            </ul>
          </div> */}
          {articleSearch.result.length === 0 && (
            <p className={s.Body__404}>No recent search</p>
          )}
        </div>
        <div className={s.Foot}>
          <div className={s.Foot__Credit}>Search by dicky54putra.github.io</div>
        </div>
      </div>
      <div className={s.Overlay} onClick={() => setIsOpen(false)}></div>
    </div>
  );
};

export default SearchResult;
