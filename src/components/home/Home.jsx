import React from "react";
import Header from "./Header";
import Filter from "./Filter";
import ModalLanguage from "./ModalLanguage";
import ModalAccount from "./ModalAccount";

export default function Home() {
  return (
    <div className="px-20">
      <ModalLanguage />
      <ModalAccount />
      <Header />
      <Filter />
    </div>
  );
}
