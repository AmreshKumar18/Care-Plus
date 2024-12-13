import React from "react";
import ctscan from "../assets/ct-scan.png";
import surgery from "../assets/surgery.png";
import xrays from "../assets/x-rays.png";
import icu from "../assets/bed.png";
import monitoring from "../assets/monitoring.png";
import disability from "../assets/disability.png";
import hemodialysis from "../assets/hemodialysis.png";
import bloodreport from "../assets/blood-report.png";
import firstaidkit from "../assets/firstaid.png";
import defribillator from "../assets/defribillator.png";

const Equipment = () => {
  return (
    <>
      <div className="card w-48 p-5 text-center">
        <img src={ctscan} alt="" />
        <p className=" font-bold text-2xl">CT-Scan</p>
      </div>
      <div className="card w-48 p-5 text-center">
        <img src={surgery} alt="" />
        <p className=" font-bold text-2xl">Surgery</p>
      </div>
      <div className="card w-48 p-5 text-center">
        <img src={xrays} alt="" />
        <p className=" font-bold text-2xl">X-Rays</p>
      </div>
      <div className="card w-48 p-5 text-center">
        <img src={icu} alt="" />
        <p className=" font-bold text-2xl">ICU Beds</p>
      </div>
      <div className="card w-48 p-5 text-center">
        <img src={monitoring} alt="" />
        <p className=" font-bold text-2xl">Monitoring</p>
      </div>
      <div className="card w-48 p-5 text-center">
        <img src={disability} alt="" />
        <p className=" font-bold text-2xl">Disability</p>
      </div>
      <div className="card w-48 p-5 text-center">
        <img src={hemodialysis} alt="" />
        <p className=" font-bold text-2xl">Hemodialysis</p>
      </div>
      <div className="card w-48 p-5 text-center">
        <img src={bloodreport} alt="" />
        <p className=" font-bold text-2xl">CT-Scan</p>
      </div>
      <div className="card w-48 p-5 text-center">
        <img src={firstaidkit} alt="" />
        <p className=" font-bold text-2xl">CT-Scan</p>
      </div>
      <div className="card w-48 p-5 text-center">
        <img src={defribillator} alt="" />
        <p className=" font-bold text-2xl">CT-Scan</p>
      </div>
    </>
  );
};

export default Equipment;
