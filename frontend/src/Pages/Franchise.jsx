import React, { useEffect } from "react";
import partner from "../assets/partner.jpg";
import { FaCheckCircle } from "react-icons/fa";

const Franchise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="franchise_sec container">
        <div className="franchise_intro">
          <div className="franchise_intro_left">
            <img src={partner} alt="" />
          </div>
          <div className="franchise_intro_right">
            <h6>Become Self Independent</h6>
            <h1>Know the Franchise Model</h1>
            <p>
              Interested in what we are doing and want to start a new franchise?
              Open a center anywhere in India and create your own identity.
            </p>
            <div className=" mt-6">
              <div className=" flex gap-3 mb-3">
                <FaCheckCircle size={25} color="blue" />
                <p>Ambulance Sevices</p>
              </div>
              <div className=" flex gap-3 mb-3">
                <FaCheckCircle size={25} color="blue" />
                <p>Affordable Pricing</p>
              </div>
              <div className=" flex gap-3 mb-3">
                <FaCheckCircle size={25} color="blue" />
                <p>On Duty Doctors</p>
              </div>
              <div className=" flex gap-3 mb-3">
                <FaCheckCircle size={25} color="blue" />
                <p>24/7 Emergency Services</p>
              </div>
              <div className=" flex gap-3 mb-3">
                <FaCheckCircle size={25} color="blue" />
                <p>Medical Shop on Clinic</p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        {/* <div className="franchise_intro">
          <div className="franchise_intro_left">
            <img src={partner} alt="" />
          </div>
          <div className="franchise_intro_right">
            <h6>Become Self Independent</h6>
            <h1>What is Care Plus Digital Clinic?</h1>
            <p>
              Interested in what we are doing and want to start a new franchise?
              Open a center anywhere in India and create your own identity.
            </p>
            <div className=" mt-6">
              <div className=" flex gap-3 mb-3">
                <FaCheckCircle size={25} color="blue" />
                <p>Ambulance Sevices</p>
              </div>
              <div className=" flex gap-3 mb-3">
                <FaCheckCircle size={25} color="blue" />
                <p>Affordable Pricing</p>
              </div>
              <div className=" flex gap-3 mb-3">
                <FaCheckCircle size={25} color="blue" />
                <p>On Duty Doctors</p>
              </div>
              <div className=" flex gap-3 mb-3">
                <FaCheckCircle size={25} color="blue" />
                <p>24/7 Emergency Services</p>
              </div>
              <div className=" flex gap-3 mb-3">
                <FaCheckCircle size={25} color="blue" />
                <p>Medical Shop on Clinic</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Franchise;
