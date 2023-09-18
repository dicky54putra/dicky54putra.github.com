import Fuse from "fuse.js";
import { useCallback, useEffect, useState } from "react";

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

  let debounceTimeout: NodeJS.Timeout;

  const handleSearch = useCallback(
    (keyword: string) => {
      setResult(fuse.search(keyword));
    },
    [setResult, fuse]
  );

  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      handleSearch(value);
    }, 300);
  };

  useEffect(() => {
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, []);

  return {
    result,
    onSearch,
  };
};

export default useSearch;
