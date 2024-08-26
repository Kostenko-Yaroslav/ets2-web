import React, { useState } from "react";
import axios from "axios";

export default function Filter() {
  const [names, setNames] = useState([]);
  const [shasi, setShasi] = useState([]);

  const getData = () => {
    axios
      .get("https://ets2-truck-api.vercel.app/api/trucks")
      .then((res) => {
        const allNames = res.data.map((truck) => truck.name);
        const allShasi = res.data.map((truck) => truck.shasi);
        const uniqueNames = [...new Set(allNames)];
        const uniqueShasi = [...new Set(allShasi)];
        setNames(uniqueNames);
        setShasi(uniqueShasi);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getData();

  const handleFilterButtonClick = (selectedCategory) => {};

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <button
            onClick={handleFilterButtonClick}
            className=" border-black border-2 rounded"
          >
            <li key={index}>{name}</li>
          </button>
        ))}
      </ul>
      <ul>
        {shasi.map((shasis, index) => (
          <button
            onClick={handleFilterButtonClick}
            className=" border-black border-2 rounded"
          >
            <li key={index}>{shasis}</li>
          </button>
        ))}
      </ul>
    </div>
  );
}
