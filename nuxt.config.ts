// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
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
  modules: [
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-snackbar",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  snackbar: {
    top: true,
    right: true,
    duration: 5000,
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
      __VUE_I18N_FULL_INSTALL__: false,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
    server: {
      fs: {
        allow: [".."],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "sass:math"; @import "@/assets/variables.scss";',
        },
      },
    },
  },
});
