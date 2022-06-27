const useParam = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    // @ts-ignore
    get: (searchParams, prop) => searchParams.get(prop),
  });
  return params;
};

export default useParam;
