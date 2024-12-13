import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserData } from "../Context/UserContext";

const Awarness = () => {
  const { awarness } = UserData();
  // console.log(awarness);
  // http://localhost:4000/api/get-all-awarness

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* first aid */}

      <div className=" container mt-24">
        <p className=" text-center text-4xl font-semibold">First Aids</p>
        {/* first column */}
        <div className=" aid_container flex justify-between">
          <div className=" text-center">
            {awarness.map((item) => (
              <div className=" aid__card my-5">
                <Link to={`/awarness-details/${item._id}`}>
                  <p>{item.title}</p>
                </Link>
              </div>
            ))}

            {/* <div className=" aid__card my-5">
              <p>Bleeding</p>
            </div>
            <div className=" aid__card my-5">
              <p>Burns</p>
            </div>
            <div className=" aid__card my-5">
              <p>Choking</p>
            </div>
            <div className=" aid__card my-5">
              <p>Fractures</p>
            </div>
            <div className=" aid__card my-5">
              <p>Electric Shock</p>
            </div>
          </div> */}
            {/* second column */}
            {/* <div className=" text-center">
            <div className=" aid__card my-5">
              <p>Heart Attack</p>
            </div>
            <div className=" aid__card my-5">
              <p>Stroke</p>
            </div>
            <div className=" aid__card my-5">
              <p>Seizures</p>
            </div>
            <div className=" aid__card my-5">
              <p>Allergic Reactions</p>
            </div>
            <div className=" aid__card my-5">
              <p>Poisoning</p>
            </div>
            <div className=" aid__card my-5">
              <p>Hypothermia</p>
            </div>
          </div> */}
            {/* third column */}
            {/* <div className=" text-center">
            <div className=" aid__card my-5">
              <p>Nosebleeds</p>
            </div>
            <div className=" aid__card my-5">
              <p>Asthma Attack</p>
            </div>
            <div className=" aid__card my-5">
              <p>Fainting</p>
            </div>
            <div className=" aid__card my-5">
              <p>Diabetic</p>
            </div>
            <div className=" aid__card my-5">
              <p>Eye Injuries</p>
            </div>
            <div className=" aid__card my-5">
              <p>Snake Bites</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* government schemes */}
      <div className="container mt-20">
        <p className=" text-center text-4xl font-semibold">
          Government Schemes
        </p>
        <div className="scheme_container flex justify-between">
          {/* first column */}
          <div className=" text-center">
            <div>
              <div className=" aid__card my-5">
                <p>Ayushman Bharat</p>
              </div>
            </div>
            <div>
              <div className=" aid__card my-5">
                <p>Rashtriya Swasthya Bima Yojana</p>
              </div>
            </div>
          </div>

          {/* second column */}
          <div className=" text-center">
            <div>
              <div className=" aid__card my-5">
                <p>Janani Suraksha Yojana</p>
              </div>
            </div>
            <div>
              <div className=" aid__card my-5">
                <p>Mukhyamantri Nishulk Dava Yojana</p>
              </div>
            </div>
          </div>

          {/* third column */}
          <div className=" text-center">
            <div>
              <div className=" aid__card my-5">
                <p>Mukhyamantri Chikitsa Sahayata Kosh</p>
              </div>
            </div>
            <div>
              <div className=" aid__card my-5">
                <p>CMCHIS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hyginee section */}
      <div className="container mt-20">
        <p className=" text-center text-4xl font-semibold">Hyginee</p>
        <div className="hyginee_container flex justify-evenly">
          {/* first column */}
          <div className=" text-center">
            <div>
              <div className=" aid__card my-5">
                <p>Ayushman Bharat</p>
              </div>
            </div>
            <div>
              <div className=" aid__card my-5">
                <p>Rashtriya Swasthya Bima Yojana</p>
              </div>
            </div>
          </div>

          {/* second column */}
          {/* <div className=" text-center">
            <div>
              <div className=" aid__card my-5">
                <p>Janani Suraksha Yojana</p>
              </div>
            </div>
            <div>
              <div className=" aid__card my-5">
                <p>Mukhyamantri Nishulk Dava Yojana</p>
              </div>
            </div>
          </div> */}

          {/* third column */}
          <div className=" text-center">
            <div>
              <div className=" aid__card my-5">
                <p>Mukhyamantri Chikitsa Sahayata Kosh</p>
              </div>
            </div>
            <div>
              <div className=" aid__card my-5">
                <p>CMCHIS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* webinars */}
      <div className=" container mt-20">
        <p className=" text-center text-4xl font-semibold">Webinars</p>
      </div>
    </>
  );
};

export default Awarness;
