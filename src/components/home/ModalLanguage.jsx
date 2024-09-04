import React from "react";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  ua: { nativeName: "Українська" },
};

export default function ModalLanguage({ setIsOpen }) {
  const { i18n } = useTranslation();

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">
          <Trans i18nKey="part15"></Trans>
        </h2>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              className="block w-full py-2 my-1 text-center border rounded-lg transition hover:bg-gray-200"
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              onClick={() => {
                i18n.changeLanguage(lng);
                closeModal();
              }}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <button
          onClick={closeModal}
          className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          <Trans i18nKey="part16"></Trans>
        </button>
      </div>
    </div>
  );
}
