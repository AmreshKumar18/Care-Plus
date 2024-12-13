import React from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.jpg";
import logo6 from "../assets/logo6.jpg";
const logos = [logo, logo1, logo2, logo3, logo4, logo5, logo6];

const Collab = () => {
  return (
    <>
      <div>
        <h1 className=" text-center font-bold pt-10">Our Esteemed Partners</h1>
        <div className="collab_section container w-full">
          <div className="marquee">
            <div className="marquee-inner space-x-10">
              {logos.map((item, index) => (
                <img src={item} key={index} alt="" className=" h-28" />
              ))}
              {logos.map((item, index) => (
                <img
                  src={item}
                  key={`duplicate-${index}`}
                  alt=""
                  className=" h-28"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collab;
