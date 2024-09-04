import React from "react";
import Header from "./Header";
import Filter from "./Filter";
import ModalAccount from "./ModalAccount";

export default function Home() {
  return (
    <div className="px-20">
      <ModalAccount />
      <Header />
      <Filter />
    </div>
  );
}
