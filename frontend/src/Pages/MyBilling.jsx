import React, { useEffect, useState } from "react";
import { UserData } from "../Context/UserContext";
import toast from "react-hot-toast";
import axios from "axios";

const MyBilling = () => {
  // http://localhost:4000/api/billing/66c9bc3fb85752d0b7be052a
  const { user, users } = UserData();
  const [billing, setBilling] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [allUser, setAllUser] = useState([]);

  const myBillings = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/billing/${user.user._id}`,
        {
          headers: { token: user.token },
        }
      );

      setBilling(response.data.paymentHistoryUser);
      console.log(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    myBillings();
  }, []);

  return (
    <>
      {/* <div className=" container mt-24">
        {billing
          .slice()
          .reverse()
          .map((item) => (
            <>
              <div className=" flex gap-10">
                <p>{item.razorpay_payment_id}</p>
                <p>{item.status}</p>
                <p>{item.user.fullname}</p>
                <p>{item.user.email}</p>
                <p>{item.user.mob_no}</p>
                <p>&#8377; {item.amount}</p>
                <p>hospital name</p>
              </div>
            </>
          ))}
      </div> */}
      <div className="admin_container">
        <div className="tablefixed mt-24">
          <table>
            <thead>
              <tr>
                <th>razorpay_payment_id</th>
                <th>status</th>
                <th>fullname</th>
                <th>email</th>
                <th>mob_no</th>
                <th>amount</th>
                <th>hospital name</th>
              </tr>
            </thead>
            {billing
              .slice()
              .reverse()
              .map((item) => (
                <>
                  <tbody>
                    <tr>
                      <td>{item.razorpay_payment_id}</td>
                      <td>{item.status}</td>
                      <td>{item.user.fullname}</td>
                      <td>{item.user.email}</td>
                      <td>{item.user.mob_no}</td>
                      <td>&#8377; {item.amount}</td>
                      <td>hospital name</td>
                    </tr>
                  </tbody>
                </>
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default MyBilling;
