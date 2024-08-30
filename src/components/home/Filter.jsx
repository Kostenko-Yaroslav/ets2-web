import React, { useState, useEffect } from "react";
import axios from "axios";
import TruckCard from "./TruckCard";

export default function FilterAndCards() {
  const [trucks, setTrucks] = useState([]);
  const [names, setNames] = useState([]);
  const [shasi, setShasi] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredTrucks, setFilteredTrucks] = useState([]);

  useEffect(() => {
    axios
      .get("https://ets2-truck-api.vercel.app/api/trucks")
      .then((res) => {
        setTrucks(res.data);
        const allNames = res.data.map((truck) => truck.name);
        const allShasi = res.data.map((truck) => truck.shasi);
        setNames([...new Set(allNames)]);
        setShasi([...new Set(allShasi)]);
        setFilteredTrucks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters(
        selectedFilters.filter((el) => el !== selectedCategory)
      );
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    if (selectedFilters.length > 0) {
      setFilteredTrucks(
        trucks.filter((truck) => {
          const matchesHrFilter =
            (selectedFilters.includes("from 400hr") && truck.hr >= 400) ||
            (selectedFilters.includes("from 500hr") && truck.hr >= 500) ||
            (selectedFilters.includes("from 600hr") && truck.hr >= 600);
          const matchesHmFilter =
            (selectedFilters.includes("from 2000Hm") && truck.hm >= 2000) ||
            (selectedFilters.includes("from 3000Hm") && truck.hm >= 3000);
          const matchesPriceFilter =
            selectedFilters.includes("up to 200k") && truck.price <= 200000;
          const matchesTankFilter =
            (selectedFilters.includes("from 800l") && truck.tank >= 800) ||
            (selectedFilters.includes("from 1100l") && truck.tank >= 1100);
          const matchesOtherFilters =
            selectedFilters.includes(truck.name) ||
            selectedFilters.includes(truck.shasi);

          return (
            matchesPriceFilter ||
            matchesOtherFilters ||
            matchesHrFilter ||
            matchesHmFilter ||
            matchesTankFilter
          );
        })
      );
    } else {
      setFilteredTrucks(trucks);
    }
  }, [selectedFilters, trucks]);

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center flex-wrap w-[70%]">
          <button
            onClick={() => handleFilterButtonClick("up to 200k")}
            className={`border-black border-2 rounded-md mr-2 mt-2 p-1 ${
              selectedFilters.includes("up to 200k") ? "bg-gray-300" : ""
            }`}
          >
            Up to $200k
          </button>
          <button
            onClick={() => handleFilterButtonClick("from 400hr")}
            className={`border-black border-2 rounded-md mr-2 mt-2 p-1 ${
              selectedFilters.includes("from 400hr") ? "bg-gray-300" : ""
            }`}
          >
            from 400 hr
          </button>
          <button
            onClick={() => handleFilterButtonClick("from 500hr")}
            className={`border-black border-2 rounded-md mr-2 mt-2 p-1 ${
              selectedFilters.includes("from 500hr") ? "bg-gray-300" : ""
            }`}
          >
            from 500 hr
          </button>
          <button
            onClick={() => handleFilterButtonClick("from 600hr")}
            className={`border-black border-2 rounded-md mr-2 mt-2 p-1 ${
              selectedFilters.includes("from 600hr") ? "bg-gray-300" : ""
            }`}
          >
            from 600 hr
          </button>
          <button
            onClick={() => handleFilterButtonClick("from 2000Hm")}
            className={`border-black border-2 rounded-md mr-2 mt-2 p-1 ${
              selectedFilters.includes("from 2000Hm") ? "bg-gray-300" : ""
            }`}
          >
            from 2000 Hm
          </button>
          <button
            onClick={() => handleFilterButtonClick("from 3000Hm")}
            className={`border-black border-2 rounded-md mr-2 mt-2 p-1 ${
              selectedFilters.includes("from 3000Hm") ? "bg-gray-300" : ""
            }`}
          >
            from 3000 Hm
          </button>
          <button
            onClick={() => handleFilterButtonClick("from 800l")}
            className={`border-black border-2 rounded-md mr-2 mt-2 p-1 ${
              selectedFilters.includes("from 800l") ? "bg-gray-300" : ""
            }`}
          >
            from 800 L
          </button>
          <button
            onClick={() => handleFilterButtonClick("from 1100l")}
            className={`border-black border-2 rounded-md mr-2 mt-2 p-1 ${
              selectedFilters.includes("from 1100l") ? "bg-gray-300" : ""
            }`}
          >
            from 1100 L
          </button>
          {names.map((name, index) => (
            <button
              key={`name-${index}`}
              onClick={() => handleFilterButtonClick(name)}
              className={`border-black border-2 rounded-md mr-2 mt-2 p-1 ${
                selectedFilters.includes(name) ? "bg-gray-300" : ""
              }`}
            >
              {name}
            </button>
          ))}
          {shasi.map((shasis, index) => (
            <button
              key={`shasi-${index}`}
              onClick={() => handleFilterButtonClick(shasis)}
              className={`border-black border-2 rounded-md  mr-2 mt-2 p-1 ${
                selectedFilters.includes(shasis) ? "bg-gray-300" : ""
              }`}
            >
              {shasis}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-20">
        {filteredTrucks.map((truck) => (
          <TruckCard
            key={truck.id}
            name={truck.name}
            model={truck.model}
            hr={truck.hr}
            shasi={truck.shasi}
            hm={truck.hm}
            tank={truck.tank}
            price={truck.price}
            img={truck.img}
          />
        ))}
      </div>
    </div>
  );
}
