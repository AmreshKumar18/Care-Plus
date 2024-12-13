import React from "react";
import doctors from "../assets/doctors.png";
import { FaCheckCircle } from "react-icons/fa";

const Why = () => {
  return (
    <>
      <div className="container flex my-24">
        <div className="left w-1/2 m-auto">
          <h1 className=" text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className=" font-bold text-yellow-500">Care Plus</span> For
            Healthcare?
          </h1>
          <p className=" pb-3">
            Care Plus has a robust presence across the healthcare ecosystem.
            From routine wellness & preventive health care to innovative
            life-saving treatments and diagnostic services, Apollo Hospitals has
            touched more than 200 million lives from over 120 countries.
          </p>
          {/* why choose features */}
          {/* <div className=" flex justify-between mt-5">
            <div>
              <div className="text-center mb-5">
                <i
                  class="fa-solid fa-3x fa-user-doctor"
                  style={{ color: "#FFD43B" }}
                ></i>
                <p className=" text-2xl font-semibold">3000+</p>
                <p>Doctors</p>
              </div>
              <div className=" text-center">
                <i
                  class="fa-solid fa-3x fa-hospital"
                  style={{ color: "#FFD43B" }}
                ></i>
                <p className=" text-2xl font-semibold">750+</p>
                <p>Hospitals</p>
              </div>
            </div>
            <div>
              <div className=" text-center mb-5">
                <i
                  class="fa-solid fa-3x fa-city"
                  style={{ color: "#FFD43B" }}
                ></i>
                <p className=" text-2xl font-semibold">38+</p>
                <p>Cities network</p>
              </div>
              <div className=" text-center">
                <i
                  class="fa-solid fa-3x fa-users"
                  style={{ color: "#FFD43B" }}
                ></i>
                <p className=" text-2xl font-semibold">18,553+</p>
                <p>Users Visited</p>
              </div>
            </div>
          </div> */}
          <div className=" mt-6">
            <div className=" flex gap-3 mb-3">
              <FaCheckCircle size={25} color="blue" />
              <p>Quick Response</p>
            </div>
            <div className=" flex gap-3 mb-3">
              <FaCheckCircle size={25} color="blue" />
              <p>100% Satisfaction</p>
            </div>
            <div className=" flex gap-3 mb-3">
              <FaCheckCircle size={25} color="blue" />
              <p>24/7 Emergency Services</p>
            </div>
            <div className=" flex gap-3 mb-3">
              <FaCheckCircle size={25} color="blue" />
              <p>Quality Services</p>
            </div>
          </div>
        </div>
        <div className="right w-1/2 m-auto">
          <img src={doctors} alt="" className=" h-96 m-auto rounded" />
        </div>
      </div>
    </>
  );
};

export default Why;
