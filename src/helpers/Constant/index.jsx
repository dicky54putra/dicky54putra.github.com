const IS_LOCAL = true;

const API_URL = IS_LOCAL
  ? "http://localhost:3003"
  : "https://raw.githubusercontent.com/dicky54putra/dicky54putra.github.io/master/api";

const DEVTO_URL = "https://dev.to/api/articles/?username=dicky54putra";

const RAW_IMAGES = IS_LOCAL
  ? "/images/"
  : "https://github.com/dicky54putra/dicky54putra.github.io/raw/master/public/images/";

export { API_URL, DEVTO_URL, RAW_IMAGES };
