export const IS_LOCAL = false;

export const API_URL = IS_LOCAL
  ? "http://localhost:3003"
  : "https://raw.githubusercontent.com/dicky54putra/dicky54putra.github.io/master/api";

export const DEVTO_URL = "https://dev.to/api/articles/?username=dicky54putra";

export const RAW_IMAGES = IS_LOCAL
  ? "/images/"
  : "https://github.com/dicky54putra/dicky54putra.github.io/raw/master/public/images/";
