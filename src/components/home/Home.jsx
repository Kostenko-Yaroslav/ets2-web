import React from "react";
import Header from "./Header";
import Filter from "./Filter";
import ModalLanguage from "./ModalLanguage";

export default function Home() {
  return (
    <div className="px-20">
      <ModalLanguage />
      <Header />
      <Filter />
    </div>
  );
}
