import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineGppGood } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { UserData } from "../../Context/UserContext";

const Appointments = () => {
  const { user } = UserData();
  const [searchQuery, setSearchQuery] = useState("");
  const [userAppointment, setUserAppointment] = useState([]);
  const [appointment, setAppointment] = useState([]);

  // http://localhost:4000/api/all-appointment
  const getAllAppointment = async (req, res) => {
    const response = await axios.get(
      "http://localhost:4000/api/all-appointment",
      {
        headers: { token: user.token },
      }
    );
    setAppointment(response.data.appointments);
    // console.log(response.data.appointments);
    try {
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while fetching appointments."
      );
      console.error("Error fetching appointments:", error.message);
    }
  };
  useEffect(() => {
    getAllAppointment();
  }, []);

  //
  const filteredUser = () => {
    const filtered = appointment.filter((appointment) =>
      appointment.fullname.toLowerCase().includes(searchQuery)
    );
    setUserAppointment(filtered);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  useEffect(() => {
    filteredUser();
  }, [appointment, searchQuery]);

  return (
    <>
      <div className="admin_container appointment_list_sec">
        <div className=" flex justify-between items-center">
          <div>
            <h1>Appointments</h1>
          </div>
          <div className=" my-5 m-auto w-full md:w-1/2">
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
        </div>
        <div className="divider mt-0"></div>

        <div className="tablefixed">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Contact No.</th>
                <th>Dignosis</th>
                <th>Status</th>
                <th>Date</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            {userAppointment
              .slice()
              .reverse()
              .map(
                (item) =>
                  item ? ( // Check if item is not null or undefined
                    <tbody key={item._id}>
                      <tr>
                        <td>{item._id}</td>
                        <td>{item.fullname}</td>
                        <td>{item.gender}</td>
                        <td>{item.mob_no}</td>
                        <td>{item.dignosis}</td>
                        <td>
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
                        </td>
                        <td>{item.appointment_date}</td>
                        <td>{item.appointment_time}</td>
                        <td>
                          <div className="action_icon">
                            <div className="lg:tooltip" data-tip="edit">
                              <Link
                                to={`/admin/update-appointment/${item._id}`}
                              >
                                <GrView size={20} />
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <>
                      <p>No Appointment Available</p>
                    </>
                  ) // If item is null or undefined, do not render anything
              )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Appointments;
