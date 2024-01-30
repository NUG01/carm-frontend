// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "Hello!",
    },
  },
  ru: {
    translation: {
      greeting: "Привет!",
    },
  },
  ka: {
    translation: {
      greeting: "გამარჯობა!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
