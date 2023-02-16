import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
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
