import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CancellationPolicy = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <div className=" container mt-24">
        <h1 className=" text-center mb-3">
          Please be aware of our cancellation policy
        </h1>
        <p>
          Cancellation policy is in place to help ensure that our appointment
          slots are used efficiently. We understand that unexpected things can
          happen, but we ask that you please provide as much notice as possible
          if you need to cancel your appointment.
        </p>{" "}
        <br />
        <p>
          We are happy to move or cancel appointments, but require 48 hours’
          notice please. Failure to attend without notice, or any appointments
          cancelled within 48 hours of arrival, will be charged in full.
          However, if an alternative appointment is booked at the time of
          cancelling, you will only be charged a 50% fee.
        </p>
        <br />
        <p>
          <b>
            Our objective is that all patients receive the best possible
            experience.
          </b>{" "}
          If you are running late for your appointment, we will do our best to
          fit you in Please be aware that late arrival may result in a shortened
          or cancelled appointment. A cancelled appointment will result in the
          fee terms detailed above.
        </p>
        <br />
        <h2>Terms and Conditions</h2>
        <p>
          If you cancel within 5 minutes: You will not be charged a cancellation
          fee.
        </p>
        <br />
        <p>
          If you cancel your appointment within 5 minutes of its appointment
          booking time, a 10% cancellation fee will be charged. This fee is
          calculated based on the total cost of the appointment.
        </p>
        <br />
        <p>
          <b>For example:</b> If your appointment costs Rs. 100 and you cancel
          it after 5 minutes of its start time, you will be charged Rs 10.
        </p>
        <br />
        <p>
          We will confirm your appointment with the doctor by sending you an SMS
          or email. Please make sure your contact information is up-to-date.
          Care Plus reserves the right to reschedule or cancel your appointment
          without notice.
        </p>
        <br />
        <p>
          If the doctor does not arrive at the exact appointment time and you
          choose to leave without waiting, you will not be refunded. However,
          you have the option to wait for the doctor to arrive. If you decide to
          wait, and the doctor does not arrive within a reasonable amount of
          time, you may request a refund.
        </p>{" "}
        <br />
        <p>
          If a patient needs to reschedule their appointment, we kindly request
          that they reach out to us as soon as possible. Our clinic will make
          every effort to accommodate rescheduling requests, subject to
          availability.
        </p>
        <br />
        <p>
          Read Refund Policy{" "}
          <span className=" text-indigo-500">
            {" "}
            <Link to="/refund-policy">Click Here</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default CancellationPolicy;
