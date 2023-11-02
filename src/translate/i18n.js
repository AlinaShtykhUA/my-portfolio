import ua from "./ua.js";
import eng from "./eng.js";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  eng: {
    translation: eng,
  },
  ua: {
    translation: ua,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem("language")),
  fallbackLng: "ua",
});

export default i18n;
