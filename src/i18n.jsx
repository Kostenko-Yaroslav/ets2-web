import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          part1: "Model: ",
          part2: "HR: ",
          part3: "Shasi: ",
          part4: "HM: ",
          part5: "Tank: ",
          part6: "Price: ",
          part7: "Up to 200k ",
          part8: "from 400 hr ",
          part9: "from 500 hr ",
          part10: "from 600 hr ",
          part11: "from 2000 Hm ",
          part12: "from 3000Hm",
          part13: "from 800l",
          part14: "from 1100 L",
          part15: "Select Language",
          part16: "Close",
        },
      },
      ua: {
        translation: {
          part1: "Модель: ",
          part2: "КС: ",
          part3: "Шасі: ",
          part4: "Крутний момент: ",
          part5: "Бак: ",
          part6: "Ціна: ",
          part7: "До 200 тисяч ",
          part8: "Від 400 КС ",
          part9: "Від 500 КС  ",
          part10: "Від 600 КС  ",
          part11: "Від 2000 крутного моменту ",
          part12: " Від 3000 крутного моменту ",
          part13: "Від 800 літрів",
          part14: "Від 1100 літрів",
          part15: "Оберіть мову",
          part16: "Закрити",
        },
      },
    },
  });

export default i18n;
