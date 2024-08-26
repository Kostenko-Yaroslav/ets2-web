import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-20">
      <h1 className="text-5xl">ETS2</h1>
      <div className="flex items-center">
        <img
          className="w-12 mr-3 cursor-pointer"
          src="/src/assets/uk.png"
          alt="England flag"
        />
        <FaRegUserCircle className="cursor-pointer" size={48} />
      </div>
    </div>
  );
}
