import { createI18n } from "vue-i18n";
import en from "../../locales/en.json";
import vi from "../../locales/vi.json";

export const supportedLangs = ["vi", "en"];
export const i18n = () => {
  let saved;
  // if (localStorage) {
  //   saved = localStorage.getItem("_locale");
  // }
  if (supportedLangs.indexOf(saved) === -1) saved = "vi";
  return createI18n({
    legacy: false,
    globalInjection: true,
    locale: saved,
    messages: {
      en,
      vi,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
  });
};
