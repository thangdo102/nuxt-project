// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image"],
});
