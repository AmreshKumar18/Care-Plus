import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <div className="policy_sec container mt-24">
        <h1 className=" text-center mb-3">Refund Policy</h1>
        <p>
          Care Plus offer’s online mode of payment. You may use internet banking
          or debit/credit card for making payment for consultation charges. You
          shall be directed to our trusted payment gateway partners once you
          proceed to make payment of Service Fees.
        </p>{" "}
        <br />
        <p>
          Care Plus shall not be liable in any manner whatsoever, if incorrect
          or inaccurate credit / debit card details are provided by you for
          making the payment of consultation Fees or you use a credit/ debit
          card which is not lawfully owned by you or if you permit a third party
          to use your password or other means to access your account
        </p>{" "}
        <br />
        <p>
          Care Plus shall keep the aforesaid information confidential at all
          times and shall not utilize and share the same with any of the third
          parties unless is an authorized third party website and / or required
          by law regulation or court order
        </p>{" "}
        <br />
        <p>Refunds will not be made against any online transaction.</p> <br />
        <p>
          Health Basix reserves the right to modify / implement a new pricing
          structure at any time prior to billing you for your initial payment or
          for future payments.
        </p>{" "}
        <br />
        <p>
          If you are eligible for a Refund then the same will be refunded to the
          same source from where the charge was deducted within 7 working days
          as per your bank’s Refund Policy
        </p>
        <br />
        <p>
          Read Cancellation Policy{" "}
          <span className=" text-indigo-600">
            <Link to="/cancellation-policy">Click Here</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default RefundPolicy;
