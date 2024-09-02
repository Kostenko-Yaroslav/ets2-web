import React from "react";
import { useTranslation, Trans } from "react-i18next";

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
  useTranslation();
  return (
    <div className="flex justify-between items-center border-2 rounded-lg w-[30%] mr-5 mb-5 p-5">
      <img src={img} alt="truck" className="w-64 h-52" />
      <div className="flex flex-col">
        <h2>{name}</h2>
        <Trans i18nKey="part1"></Trans>
        {model} <br />
        <Trans i18nKey="part2"></Trans>
        {hr}
        <br />
        <Trans i18nKey="part3"></Trans>
        {shasi}
        <br />
        <Trans i18nKey="part4"></Trans>
        {hm}
        <br />
        <Trans i18nKey="part5"></Trans>
        {tank}
        <br />
        <Trans i18nKey="part6"></Trans>
        {price}
      </div>
    </div>
  );
}
