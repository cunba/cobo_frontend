import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import en from '../../assets/locales/en.json'
import es from '../../assets/locales/es.json'

const resources = {
  en: { translation: en },
  es: { translation: es }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    backend: {
      loadPath: "./assets/locales/{{lng}}.json"
    },
    lng: "en",
    fallbackLng: "es",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n