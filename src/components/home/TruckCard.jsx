import React from "react";

export default function TruckCard({ name, model, hr, shasi, hm, tank, price }) {
  return (
    <div className="truck-card">
      <h2>{name}</h2>
      <p>Model: {model}</p>
      <p>HR: {hr}</p>
      <p>Shasi: {shasi}</p>
      <p>HM: {hm}</p>
      <p>Tank: {tank}</p>
      <p>Price: {price}</p>
    </div>
  );
}
