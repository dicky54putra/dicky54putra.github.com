import Fuse from "fuse.js";
import { useCallback, useState } from "react";

export type TuseSearch<T> = {
  options: Fuse.IFuseOptions<T>;
  lists: T[];
};
export type TResult<T> = {
  item: T;
  refIndex: number;
};
const useSearch = <T>(args: TuseSearch<T>) => {
  const { lists, options } = args;
  const fuse = new Fuse(lists ?? [], options);
  const [result, setResult] = useState<TResult<T>[]>([]);

  const handleSearch = useCallback(
    (keyword: string) => {
      setResult(
        fuse.search(keyword, {
          limit: 6,
        })
      );
    },
    [setResult, fuse]
  );

  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    handleSearch(value);
  };

  return {
    result,
    onSearch,
  };
};

export default useSearch;
