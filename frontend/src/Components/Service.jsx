import React from "react";

const Service = () => {
  //
  return (
    <>
      <div className="service_section container">
        <div>
          <div className="header_txt">
            <h1 className="text-center text-4xl font-bold mt-20 m-3">
              Services
            </h1>
          </div>

          <div className="services flex text-center justify-between">
            <div className="service__appointment">
              <i
                class="fa-regular fa-2x fa-calendar-check"
                style={{ color: "#B197FC" }}
              ></i>
              <p className=" font-semibold mt-3">Appointment</p>
            </div>
            <div className="service__medicine">
              <i
                class="fa-solid fa-2x fa-suitcase-medical"
                style={{ color: "#FFD43B" }}
              ></i>
              <p className=" font-semibold mt-3">Medical Data</p>
            </div>
            <div className="service__medical">
              <i
                class="fa-solid fa-2x fa-bed-pulse"
                style={{ color: "#D6A2E8" }}
              ></i>
              <p className=" font-semibold mt-3">Medical Facilities</p>
            </div>
            <div className="service__ambulance">
              <i
                class="fa-solid fa-2x fa-truck-medical"
                style={{ color: "#74C0FC" }}
              ></i>
              <p className=" font-semibold mt-3">Ambulance</p>
            </div>

            <div className="service__hospital">
              <i
                class="fa-solid fa-2x fa-hospital"
                style={{ color: "#f96666" }}
              ></i>
              <p className=" font-semibold mt-3">Trusted Hospitals</p>
            </div>
            <div className="service__emergency">
              <i
                class="fa-solid fa-2x fa-bell"
                style={{ color: "#69ce55" }}
              ></i>
              <p className=" font-semibold mt-3">Emergency</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
