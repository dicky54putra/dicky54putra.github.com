const IS_LOCAL = true;

const API_URL = IS_LOCAL
  ? "http://localhost:3003"
  : "https://raw.githubusercontent.com/dicky54putra/dicky54putra.github.io/v1/api";

const DEVTO_URL = "https://dev.to/api/articles/?username=dicky54putra";

export { API_URL, DEVTO_URL };
