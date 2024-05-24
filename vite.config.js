// vite.config.js
import { defineConfig } from "vite";
const path = require("path");

import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  base: "/nightcat-festival-website/",
  root: path.resolve(__dirname, "src"),

  resolve: {
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          postcssPresetEnv({
            stage: 3,
            features: {
              "custom-properties": false,
            },
          }),
        ],
      },
    },
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
});
