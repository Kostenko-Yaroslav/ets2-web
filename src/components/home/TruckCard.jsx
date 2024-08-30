import React from "react";

export default function TruckCard({
  name,
  model,
  hr,
  shasi,
  hm,
  tank,
  price,
  img,
}) {
  return (
    <div className="flex justify-between items-center border-2 rounded-lg w-[30%] mr-5 mb-5 p-5">
      <img src={img} alt="truck" className="w-64 h-52" />
      <div className="flex flex-col">
        <h2>{name}</h2>
        <p>Model: {model}</p>
        <p>HR: {hr}</p>
        <p>Shasi: {shasi}</p>
        <p>HM: {hm}</p>
        <p>Tank: {tank}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
}
