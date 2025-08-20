import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    assetsInclude: ["**/*.{jpg,png,svg,gif}"],
    copyPublicDir: true
  },
});
