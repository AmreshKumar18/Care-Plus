import React from "react";
import navigate, { useNavigate } from "react-router-dom";
import doctor from "../assets/doctor.png";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="welcome__section container mt-20 flex justify-between">
        <div className="left w-1/2 m-auto items-center ">
          <h1 className=" text-6xl font-bold mb-3">
            Get Better Care For Your Health
          </h1>
          <p className=" mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            harum ullam. Enim, quibusdam error! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officia, expedita?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Tempora, tenetue Lorem ipsum
            dolor sit amet consectetur adipisicing elit. A, soluta!
          </p>
          <button
            className=" btn button"
            onClick={() => navigate("/hospitals")}
          >
            Get Started
          </button>
        </div>
        <div className="right w-1/2 m-auto items-center ">
          <img src={doctor} alt="" className=" doctor" />
        </div>
      </div>
    </>
  );
};

export default Welcome;
