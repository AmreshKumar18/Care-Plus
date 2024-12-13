import React, { useEffect } from "react";
import Promotion from "../Components/Promotion";

const Promotions = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <div className=" container mt-24">
        <h1>Looking for a gift vouchers for Appointments?</h1>
        <br />
        <p>
          Then The Medical gift vouchers are the perfect choice. After all, what
          could be more precious than the gift of health!
        </p>
        <br />
        <p>
          Our gift vouchers are available in a range of values and can be
          redeemed against any of our services, including massage. We can also
          post them directly to the recipient.
        </p>
        <Promotion />
      </div>
    </>
  );
};

export default Promotions;
