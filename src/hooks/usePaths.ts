const usePaths = () => {
  const paths = new URL(window.location.href).pathname
    .split("/")
    .filter((p) => p !== "");

  return paths;
};

export default usePaths;
