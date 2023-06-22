import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./public/locales/en/common.json";
import translationIT from "./public/locales/it/common.json";

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "it", // Set the default language here if desired
  fallbackLng: "it", // Set the fallback language here if desired
  interpolation: {
    escapeValue: false, // Not necessary for React as it escapes by default
  },
});

export default i18n;
