import React from "react";
import mindiscount from "../assets/mindiscount.jpg";
import maxdiscount from "../assets/maxdiscount.jpg";
import gift from "../assets/gift.jpg";
import refer from "../assets/refer.png";

const Promotion = () => {
  return (
    <>
      <h1 className=" text-center">Promotions</h1>
      <div className="promotion_sec">
        <div className="promotion_card">
          <img src={mindiscount} alt="" />
          <p>10% Offer</p>
        </div>
        <div className="promotion_card">
          <img src={gift} alt="" />
          <p>Lucky Customers</p>
        </div>
        <div className="promotion_card">
          <img src={maxdiscount} alt="" />
          <p>50% Offer</p>
        </div>
        <div className="promotion_card">
          <img src={refer} alt="" />
          <p>50% Offer</p>
        </div>
      </div>
    </>
  );
};

export default Promotion;
