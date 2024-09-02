import React from "react";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  ua: { nativeName: "Українська" },
};

export default function ModalLanguage() {
  const { i18n } = useTranslation();
  return (
    <div>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  );
}
