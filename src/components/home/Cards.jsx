import React, { useEffect, useState } from "react";
import axios from "axios";
import TruckCard from "./TruckCard";

export default function Cards() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    axios
      .get("https://ets2-truck-api.vercel.app/api/trucks")
      .then((res) => {
        setTrucks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="truck-list">
      {trucks.map((truck) => (
        <TruckCard
          key={truck.id}
          name={truck.name}
          model={truck.model}
          hr={truck.hr}
          shasi={truck.shasi}
          hm={truck.hm}
          tank={truck.tank}
          price={truck.price}
        />
      ))}
    </div>
  );
}
