import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEng from "./eng/translation.json";
import translationRus from "./rus/translation.json";
import translationKgz from "./kgz/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEng,
    },
    ru: {
      translation: translationRus,
    },
    ky: {
      translation: translationKgz,
    },
  },
  lng: "en",
});

export default i18n;
