import React from "react";
import RservedBed from "../assets/ReserverdBed.png";
import AllotedBed from "../assets/AllotedBed.png";
import EmptyBed from "../assets/EmptyBed.png";

const Bed = () => {
  return (
    <>
      <div className=" flex m-auto">
        {/* left */}
        <div className="beds_card_sec">
          <div className="bed_card">
            <div className="bed_card_header flex justify-between">
              <p>Bed-1</p>
              <h2 className=" font-bold">Empty</h2>
            </div>
            <div className="bed_details">
              <img src={EmptyBed} alt="" />
              <p>Patient Name: xyz</p>
              <p>Date: 01/08/2004</p>
              <p>Gender: Male</p>
            </div>
          </div>
          <div className="bed_card">
            <div className="bed_card_header flex justify-between">
              <p>Bed-1</p>
              <h2 className=" font-bold">Reserved</h2>
            </div>
            <div className="bed_details">
              <img src={RservedBed} alt="" />
              <p>Patient Name: xyz</p>
              <p>Date: 01/08/2004</p>
              <p>Gender: Male</p>
            </div>
          </div>
          <div className="bed_card">
            <div className="bed_card_header flex justify-between">
              <p>Bed-1</p>
              <h2 className=" font-bold">Empty</h2>
            </div>
            <div className="bed_details">
              <img src={EmptyBed} alt="" />
              <p>Patient Name: xyz</p>
              <p>Date: 01/08/2004</p>
              <p>Gender: Male</p>
            </div>
          </div>
          <div className="bed_card">
            <div className="bed_card_header flex justify-between">
              <p>Bed-1</p>
              <h2 className=" font-bold">In-use</h2>
            </div>
            <div className="bed_details">
              <img src={AllotedBed} alt="" />
              <p>Patient Name: xyz</p>
              <p>Date: 01/08/2004</p>
              <p>Gender: Male</p>
            </div>
          </div>
          <div className="bed_card">
            <div className="bed_card_header flex justify-between">
              <p>Bed-1</p>
              <h2 className=" font-bold">In-use</h2>
            </div>
            <div className="bed_details">
              <img src={AllotedBed} alt="" />
              <p>Patient Name: xyz</p>
              <p>Date: 01/08/2004</p>
              <p>Gender: Male</p>
            </div>
          </div>
          <div className="bed_card">
            <div className="bed_card_header flex justify-between">
              <h1>Bed-1</h1>
              <h2 className=" font-bold">Empty</h2>
            </div>
            <div className="bed_details">
              <img src={EmptyBed} alt="" />
              <p>Patient Name: xyz</p>
              <p>Date: 01/08/2004</p>
              <p>Gender: Male</p>
            </div>
          </div>
        </div>
        {/* right */}
      </div>
    </>
  );
};

export default Bed;
