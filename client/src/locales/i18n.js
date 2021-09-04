import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from 'src/locales/en.json'
import es from 'src/locales/es.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
}

i18n
  .use(initReactI18next)
  .init({ resources })

export default i18n