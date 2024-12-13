import React from "react";
import advanced_ambulance_icon from "../assets/advanced_ambulance_icon.png";
import basic_ambulance_icon from "../assets/basic_ambulance_icon.png";
import patient_ambulance_icon from "../assets/patient_ambulance_icon.png";
import firstaid from "../assets/firstaid.png";
import oxygen from "../assets/oxygen.jpg";
import stretcher from "../assets/stretcher.jpg";
import ecgmacine from "../assets/ecgmacine.jpg";
import emt from "../assets/emt.jpg";

const Ambulancedetails = () => {
  return (
    <>
      <h2 className=" text-center font-bold">Types of Ambulance</h2>
      <div className="ambulance_deatils_sec mt-3 mx-3 flex gap-10">
        <div className="advanced_life_support p-5">
          <img src={basic_ambulance_icon} alt="" className=" h-32 m-auto" />
          <h1 className=" text-3xl font-bold text-center mb-3">
            Basic Life Support
          </h1>
          <p>
            Medical First Responder (MFR) ambulances are the first responders to
            any medical emergency. They are equipped with basic medical
            equipments and trained medical personnel to stabilize patients until
            more advanced care arrives.
          </p>
          <div className=" flex justify-center gap-3 m-auto">
            <div className=" w-20 text-center">
              <img src={firstaid} alt="" />
              <p>First Aid</p>
            </div>
            <div className=" w-20 text-center">
              <img src={stretcher} alt="" />
              <p>Stretcher</p>
            </div>
          </div>
        </div>
        <div className="advanced_life_support p-5">
          <img src={patient_ambulance_icon} alt="" className=" h-32 m-auto" />
          <h1 className=" text-3xl font-bold text-center mb-3">
            Patient Life Support
          </h1>
          <p>
            Medical First Responder (MFR) ambulances are the first responders to
            any medical emergency. They are equipped with basic medical
            equipments and trained medical personnel to stabilize patients until
            more advanced care arrives.
          </p>
          <div>
            <div className=" flex justify-center gap-3 m-auto">
              <div className=" w-20 text-center">
                <img src={firstaid} alt="" />
                <p>First Aid</p>
              </div>
              <div className=" w-20 text-center">
                <img src={stretcher} alt="" />
                <p>Stretcher</p>
              </div>
              <div className=" w-20 text-center">
                <img src={oxygen} alt="" />
                <p>Cylinder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="advanced_life_support p-5">
          <img src={advanced_ambulance_icon} alt="" className=" h-32 m-auto" />
          <p className=" text-3xl font-bold text-center mb-3">
            Advanced Life Support
          </p>
          <p>
            Medical First Responder (MFR) ambulances are the first responders to
            any medical emergency. They are equipped with basic medical
            equipments and trained medical personnel to stabilize patients until
            more advanced care arrives.
          </p>
          <div className=" flex justify-center gap-3 m-auto">
            <div className=" w-20 text-center">
              <img src={firstaid} alt="" />
              <p>First Aid</p>
            </div>
            <div className=" w-20 text-center">
              <img src={stretcher} alt="" />
              <p>Stretcher</p>
            </div>
            <div className=" w-20 text-center">
              <img src={oxygen} alt="" />
              <p>Cylinder</p>
            </div>
            <div className=" w-20 text-center">
              <img src={ecgmacine} alt="" />
              <p>Monitor</p>
            </div>
            <div className=" w-20 text-center">
              <img src={emt} alt="" />
              <p>EMT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ambulancedetails;
