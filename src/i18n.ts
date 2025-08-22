import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationUz from "./locales/uz/translation.json";
import translationEn from "./locales/en/translation.json";
import translationRu from "./locales/ru/translation.json";

const resources = {
  uz: { translation: translationUz },
  en: { translation: translationEn },
  ru: { translation: translationRu },
};

i18n
  .use(LanguageDetector) // browser tili aniqlovchi
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;