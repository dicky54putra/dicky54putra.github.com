import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";

export default defineConfig({
  plugins: [
    react(),
    lightningcss({
      browserslist: "last 2 versions",
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@router", replacement: path.resolve(__dirname, "src/router") },
      { find: "@store", replacement: path.resolve(__dirname, "src/store") },
      { find: "@types", replacement: path.resolve(__dirname, "src/types") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
    ],
  },
});
