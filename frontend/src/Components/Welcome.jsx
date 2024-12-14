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
            Your health is your greatest asset, and we are here to help you
            nurture it. With access to trusted healthcare providers,
            state-of-the-art facilities, and personalized care, we ensure your
            well-being is always our top priority. From preventive checkups to
            advanced treatments, we are committed to offering compassionate and
            comprehensive medical care for you and your loved ones. Choose
            better health, choose us.
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
