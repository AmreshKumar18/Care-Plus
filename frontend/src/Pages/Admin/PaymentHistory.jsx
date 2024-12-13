import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserData } from "../../Context/UserContext";

const PaymentHistory = () => {
  const { user } = UserData();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPayment, setSearchPayment] = useState([]);
  const [payment, setPayment] = useState([]);

  const filter = () => {
    const filtered = payment.filter((payment) =>
      payment.razorpay_payment_id.toLowerCase().includes(searchQuery)
    );
    setSearchPayment(filtered);
  };

  useEffect(() => {
    filter();
  }, [payment, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const getAllPayment = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/all-bill", {
        headers: { token: user.token },
      });
      console.log(response.data.allBilling);
      setPayment(response.data.allBilling);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    getAllPayment();
  }, []);
  return (
    <>
      <div className="admin_container">
        <div className=" my-10 m-auto w-full ">
          <label className="input input-bordered flex items-center gap-2 mx-10">
            <input
              type="text"
              className="grow"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by email, number..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="tablefixed">
          <table>
            <thead>
              <tr>
                <th>Payment Id</th>
                <th>Status</th>
                <th>Date</th>
                <th>User Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>email</th>
                <th>amount</th>
              </tr>
            </thead>
            {searchPayment && searchPayment.length > 0 ? (
              searchPayment
                .slice()
                .reverse()
                .map((item) => (
                  <>
                    <tbody>
                      <tr>
                        <td>{item.razorpay_payment_id}</td>
                        <td>
                          {item.status === "Completed" ? (
                            <>
                              <div className="badge badge-accent">
                                Completed
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="badge badge-ghost">Pending</div>
                            </>
                          )}
                        </td>
                        <td>{item.date}</td>
                        <td>{item.user?._id}</td>
                        <td>{item.user?.fullname}</td>
                        <td>{item.user?.mob_no}</td>
                        <td>{item.user?.email}</td>
                        <td>&#8377; {item.amount}</td>
                      </tr>
                    </tbody>
                  </>
                ))
            ) : (
              <>
                <p>No Payment Found...</p>
              </>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
