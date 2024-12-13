import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import doctor from "../assets/appointment.png";
import ambulance from "../assets/ambulance.png";
import Bed from "./Bed";
import Medicine from "./Medicine";
import Equipment from "./Equipment";
import Ambulancedetails from "./Ambulancedetails";
import { Chart } from "react-google-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Tab = ({ doctorDetails }) => {
  console.log(doctorDetails);

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // const options = {
  //   animationEnabled: true,
  //   exportEnabled: true,
  //   theme: "dark2", // "light1", "dark1", "dark2"
  //   title: {
  //     text: "Beds Distribution",
  //   },
  //   data: [
  //     {
  //       type: "pie",
  //       indexLabel: "{label}: {y}",
  //       startAngle: -90,
  //       dataPoints: [
  //         { y: 3, label: "Empty", color: "#008000" },
  //         { y: 2, label: "In-Used", color: "#FF0000" },
  //         { y: 1, label: "Alloted", color: "#FFFF00" },
  //       ],
  //     },
  //   ],
  // };

  //
  const data = [
    ["Task", "Hours per Day"],
    ["Alloted", 11],
    ["Empty", 2],
    ["Reserved", 2],
  ];

  const options = {
    title: "My Daily Activities",
    is3D: true,
  };

  return (
    <div className="tabs tab__card">
      <div className="tab-buttons">
        <button
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => handleTabClick("tab1")}
        >
          <i class="fa-solid fa-xl fa-user-doctor"></i> Doctors
        </button>
        <button
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => handleTabClick("tab2")}
        >
          <i class="fa-solid fa-bed fa-xl"></i> Beds
        </button>
        <button
          className={activeTab === "tab3" ? "active" : ""}
          onClick={() => handleTabClick("tab3")}
        >
          <i class="fa-solid fa-microscope fa-xl"></i> Equipments
        </button>
        <button
          className={activeTab === "tab4" ? "active" : ""}
          onClick={() => handleTabClick("tab4")}
        >
          <i class="fa-solid fa-pills fa-xl"></i> Medicines
        </button>
        <button
          className={activeTab === "tab5" ? "active" : ""}
          onClick={() => handleTabClick("tab5")}
        >
          <i class="fa-solid fa-truck-medical fa-xl"></i> Ambulances
        </button>
      </div>
      <div>
        {activeTab === "tab1" && (
          <div className="tabs_card flex justify-evenly flex-wrap w-full gap-5">
            {/* doctor card make as a components when backend wiil start */}
            {doctorDetails.map((item) => (
              // <div className="doctor__card flex w-5/12 mt-5">
              //   <div className="doctor_profile">
              //     <img src={`http://localhost:4000/${item.image}`} alt="" />
              //   </div>
              //   <div className=" m-auto">
              //     <p className=" text-3xl font-semibold">{item.d_name}</p>
              //     <p className=" badge bg-green-400">{item.isAvailable}</p>
              //     <p>Age : {item.d_age}</p>
              //     <p>Gender: {item.d_gender}</p>
              //     <p>experienced : {item.d_experienced} Yrs</p>
              //     <p>Specialist : {item.d_specialist}</p>
              //   </div>
              // </div>
              <div class="d_card">
                <button class="mail">
                  <i class="fa-solid fa-envelope"></i>
                </button>
                <div class="profile-pic">
                  <img src={`http://localhost:4000/${item.image}`} alt="" />
                </div>
                <div class="bottom">
                  <div class="content">
                    <span class="name">{item.d_name}</span>
                    <span class="about-me">
                      <p className=" badge bg-green-400">{item.isAvailable}</p>
                      <p>Age : {item.d_age}</p>
                      <p>Gender: {item.d_gender}</p>
                      <p>experienced : {item.d_experienced} Yrs</p>
                      <p>Specialist : {item.d_specialist}</p>
                    </span>
                  </div>
                  <div class="bottom-bottom">
                    <div class="social-links-container">
                      <i class="fa-brands fa-linkedin"></i>
                      <i class="fa-brands fa-x-twitter"></i>
                      <i class="fa-brands fa-github"></i>
                    </div>
                    <button class="button">Contact Me</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* beds tab */}
        {activeTab === "tab2" && (
          <div className="beds_sec flex">
            <div className="beds_container w-1/2">
              <Bed />
            </div>
            <div className="beds_chart w-1/2 px-5">
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        )}
        {/* equipments tab */}
        {activeTab === "tab3" && (
          <div className="equipment_sec flex flex-wrap justify-evenly gap-10">
            {/* <Equipment /> */}
            {/* {equipment.map((item) => (
              <div className="card w-48 p-5 text-center">
                <img src={`http://localhost:4000/${item.image}`} alt="" />
                <p className=" font-bold text-2xl">{item.title}</p>
              </div>
            ))} */}
          </div>
        )}
        {/* medicines tab */}
        {activeTab === "tab4" && (
          <div>
            <Medicine />
          </div>
        )}
        {/* ambulance tabs */}
        {activeTab === "tab5" && (
          <div>
            <Ambulancedetails />
            <h1 className=" text-center font-bold mt-5">Lists of Ambulance</h1>
            <div className="tabs_card flex justify-evenly flex-wrap w-full gap-5">
              {/* doctor card make as a components when backend wiil start */}
              {/* {ambulance.map((item) => (
                <div className="doctor__card flex w-5/12 mt-5">
                  <div className="doctor_profile w-1/2">
                    <img src={`http://localhost:4000/${item.image}`} alt="" />
                  </div>
                  <div className=" m-auto">
                    <p className=" text-xl font-semibold">
                      {item.ambulance_type}
                    </p>
                    <p className=" badge bg-green-400">Available</p>
                    <p>Age : {item.ambulance_age}</p>
                    <p>Gender: {item.ambulance_gender}</p>
                    <p>experienced : {item.ambulance_exp} Yrs</p>
                    <p>Contact No : {item.ambulance_contact}</p>
                    <p>MRP. &#8377; {item.price}</p>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
