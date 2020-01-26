import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    // we init with resources
    debug: true,
    fallbackLng: "en",
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    },

    react: {
      // wait: true,
      useSuspense: false
    }, 
    returnObjects: true
  }, (err) => {
    console.log(err)
  });

export default i18n;