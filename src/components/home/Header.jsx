import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import ModalLanguage from "./ModalLanguage";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center h-20">
      <h1 className="text-5xl">ETS2</h1>
      <div className="flex items-center">
        <img
          className="w-12 mr-3 cursor-pointer"
          src="/src/assets/uk&ua.png"
          alt="England flag"
          onClick={() => setIsOpen(true)}
        />
        <FaRegUserCircle className="cursor-pointer" size={48} />
        {isOpen && <ModalLanguage setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}
