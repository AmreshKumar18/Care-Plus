import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import doctor from "../assets/doctor.jpg";
import { MdCancel } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import toast from "react-hot-toast";
import axios from "axios";
import { UserData } from "../Context/UserContext";

const Appointment = () => {
  const { user } = UserData();

  const [myAppointment, setMyAppointment] = useState([]);
  const [paidAppointments, setPaidAppointments] = useState([]);

  //  http://localhost:4000/api/my-appointment/66c9bc3fb85752d0b7be052a

  const myAppointments = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/my-appointment/${user.user._id}`,
        {
          headers: { token: user.token },
        }
      );

      setMyAppointment(response.data.appointments);
      // console.log(response.data.appointments);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    myAppointments();
  }, []);

  //  cancel appointment
  const handleCancelAppointment = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/cancel-appointment/${id}`
      );

      // If cancellation is successful
      if (response) {
        toast.success("Appointment cancelled successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  // open razorpay
  const handleOpenRazorpay = (data, appointmentId, userId) => {
    // console.log(data);
    const options = {
      key: "rzp_test_wuwRLI5y8uPj6L",
      amount: Number(data.amount),
      currency: data.currency,
      name: "Care Plus",
      description: "Test Transaction",
      image: "",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          const res = await fetch("http://localhost:4000/api/payment/verify", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              user_id: userId,
              amount: data.amount / 100,
            }),
          });

          const verifyData = await res.json();

          if (verifyData.message) {
            toast.success(verifyData.message);
            setPaidAppointments((prev) => [...prev, appointmentId]);
            // onSubmit(getValues());
          }
        } catch (error) {
          console.log(error);
        }
      },
      notes: {
        address: "Care Plus Pvt. Ltd",
      },
      theme: {
        color: "#f0da69",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  //
  const handlePayment = async (amount, appointmentId) => {
    const info = { amount: amount };
    try {
      const res = await axios.post(
        "http://localhost:4000/api/payment/order",
        info
      );
      handleOpenRazorpay(res.data.data, appointmentId, user.user._id);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className=" container mt-24">
        <div className="p-2 bg-orange-400 rounded-md text-white w-fit">
          <Link to="/hospitals">
            <p className=" flex text-center items-center gap-1">
              <FaPlus />
              New Appointment
            </p>
          </Link>
        </div>
        <div>
          <h2 className=" mt-5">My Appointments</h2>
          <hr />
          {myAppointment && myAppointment.length > 0 ? (
            myAppointment
              .slice()
              .reverse()
              .map((item) => (
                <>
                  <div className="my_appointment_card">
                    <div className=" flex">
                      <div>
                        <img
                          src={`http://localhost:4000/${item.hospital.image}`}
                          alt=""
                        />
                      </div>

                      <div className=" flex flex-col justify-evenly ml-4">
                        <h4>{item.hospital.h_name}</h4>
                        <p>{item.hospital.h_location}</p>
                        <p>
                          <b>Dignosis: </b>
                          {item.dignosis}
                        </p>
                        <p>
                          <b>Date: </b>
                          {item.appointment_date}
                        </p>
                        <p>
                          <b>Timing: </b>
                          {item.appointment_time}
                        </p>
                        <p>
                          <b>&#8377; </b>
                          {item.hospital.amount}
                        </p>
                        <h5>
                          {(() => {
                            switch (item.status) {
                              case "Completed":
                                return (
                                  <span className=" badge badge-success text-white">
                                    Completed
                                  </span>
                                );
                              case "Pending":
                                return (
                                  <span className=" badge badge-neutral text-white">
                                    Pending
                                  </span>
                                );
                              case "Alloted":
                                return (
                                  <span className=" badge badge-info text-white">
                                    Alloted
                                  </span>
                                );
                              case "Cancelled":
                                return (
                                  <span className=" badge badge-warning">
                                    Cancelled
                                  </span>
                                );
                            }
                          })()}
                        </h5>
                      </div>
                    </div>
                    <div className=" flex flex-col ">
                      {paidAppointments.includes(item._id) ||
                      item.status === "completed" ? (
                        <button className="btn1 m-auto disabled">Paid</button>
                      ) : (
                        <button
                          className="btn2 m-auto"
                          onClick={() =>
                            handlePayment(item.hospital.amount, item._id)
                          }
                        >
                          Pay Here
                        </button>
                      )}
                      {item.status === "Cancelled" ||
                      item.status === "Completed" ? (
                        <>
                          <button className="disabled btn1 m-auto" disabled>
                            {item.status}
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className=" btn1 m-auto"
                            onClick={() => handleCancelAppointment(item._id)}
                          >
                            Cancel Appointment
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </>
              ))
          ) : (
            <>
              <p className=" mt-24 text-center mb-24">
                No Appointments Available...
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Appointment;
