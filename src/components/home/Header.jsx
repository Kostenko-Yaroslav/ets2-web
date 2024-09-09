import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import ModalLanguage from "./ModalLanguage";
import ModalAccount from "./ModalAccount";

export default function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <div className="flex justify-between items-center h-20">
      <h1 className="text-5xl">ETS2</h1>
      <div className="flex items-center">
        <img
          className="w-12 mr-3 cursor-pointer"
          src="/src/assets/uk&ua.png"
          alt="England flag"
          onClick={() => setIsLanguageOpen(true)}
        />
        <FaRegUserCircle
          className="cursor-pointer"
          size={48}
          onClick={() => setIsAccountOpen(true)}
        />
        {isLanguageOpen && <ModalLanguage setIsOpen={setIsLanguageOpen} />}
        {isAccountOpen && <ModalAccount setIsOpen={setIsAccountOpen} />}
      </div>
    </div>
  );
}
