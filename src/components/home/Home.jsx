import React from "react";
import Header from "./Header";
import Filter from "./Filter";
import Cards from "./Cards";

export default function Home() {
  return (
    <div className="px-20">
      <Header />
      <Filter />
      <Cards />
    </div>
  );
}
