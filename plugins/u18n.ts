import { defineNuxtPlugin } from "nuxt/app";
import { i18n } from "./src/i18n";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n());
});
