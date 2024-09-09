import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { FaGoogle } from "react-icons/fa";
import { Trans } from "react-i18next";

const cookies = new Cookies();

export default function ModalAccount({ setIsOpen }) {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      cookies.set("auth-token", result.user.refreshToken);
    } catch (err) {
      console.error(err);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">
          <Trans i18nKey="part17"></Trans>
        </h2>
        <button
          onClick={signInWithGoogle}
          className="w-full py-2 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          <Trans i18nKey="part18"></Trans>
        </button>
        <button
          onClick={closeModal}
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          <Trans i18nKey="part19"></Trans>
        </button>
      </div>
    </div>
  );
}
