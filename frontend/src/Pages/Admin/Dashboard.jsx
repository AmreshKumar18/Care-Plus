import React, { useEffect, useState } from "react";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { FaBedPulse } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaTruckMedical } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import { RiHospitalFill } from "react-icons/ri";
import { FaFileSignature } from "react-icons/fa";
import { UserData } from "../../Context/UserContext";
import toast from "react-hot-toast";
import axios from "axios";
import WeatherCard from "../../Components/WeatherCard";

const Dashboard = () => {
  const { user, jobs, numUsers, numHospital } = UserData();
  const [appointment, setAppointment] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [ambulance, setAmbulance] = useState([]);

  //

  const getAllDoctor = async (req, res) => {
    const response = await axios.get("http://localhost:4000/api/all-doctors", {
      headers: { token: user.token },
    });
    setDoctor(response.data.numDoctor);
    console.log(response.data.numDoctor);
    try {
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while fetching appointments."
      );
      console.error("Error fetching appointments:", error.message);
    }
  };
  //
  const getAllAppointment = async (req, res) => {
    const response = await axios.get(
      "http://localhost:4000/api/all-appointment",
      {
        headers: { token: user.token },
      }
    );
    setAppointment(response.data.numAppointment);
    console.log(response.data.numAppointment);
    try {
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while fetching appointments."
      );
      console.error("Error fetching appointments:", error.message);
    }
  };
  //
  const getAllAmbulance = async (req, res) => {
    const response = await axios.get(
      "http://localhost:4000/api/all-ambulances",
      {
        headers: { token: user.token },
      }
    );
    setAmbulance(response.data.numAmbulance);
    console.log(response.data.numAmbulance);
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
    getAllDoctor();
    getAllAmbulance();
  }, []);

  return (
    <>
      <div className="admin_container">
        <h1>Dashboard</h1>

        {/* <p>{currentHour}</p> */}
        <WeatherCard />
        <div className="appointment_card_sec">
          <div className="appointment_card">
            <div>
              <h2>Total Appointment</h2>
              <p>{appointment}</p>
            </div>
            <div className="icon">
              <BsFillFileEarmarkMedicalFill size={35} />
            </div>
          </div>
          <div className="doctor_card">
            <div>
              <h2>Total Doctors</h2>
              <p>{doctor}</p>
            </div>
            <div className="icon">
              <FaUserDoctor size={35} />
            </div>
          </div>
          <div className="ambulance_card">
            <div>
              <h2>Total Ambulances</h2>
              <p>{ambulance}</p>
            </div>
            <div className="icon">
              <FaTruckMedical size={35} />
            </div>
          </div>
          <div className="earning_card">
            <div>
              <h2>Total Earning</h2>
              <p>RS. 109</p>
            </div>
            <div className="icon">
              <GiTakeMyMoney size={40} />
            </div>
          </div>
          <div className="beds_card">
            <div>
              <h2>Total Beds</h2>
              <p>109</p>
            </div>
            <div className="icon">
              <FaBedPulse size={35} />
            </div>
          </div>
          {/* <div className="appointment_card">
            <div>
              <h2>Rating & Reviews</h2>
              <p>109</p>
            </div>
            <div className="icon">
              <VscFeedback size={35} />
            </div>
          </div> */}
          <div className="total_user_card">
            <div>
              <h2>Total Users</h2>
              <p>{numUsers.numUsers}</p>
            </div>
            <div className="icon">
              <FaUsers size={35} />
            </div>
          </div>
          <div className="appointment_card">
            <div>
              <h2>Total Jobs</h2>
              <p>{jobs.length}</p>
            </div>
            <div className="icon">
              <FaFileSignature size={35} />
            </div>
          </div>
          <div className="hospitals_card">
            <div>
              <h2>Total Hospitals</h2>
              <p>{numHospital}</p>
            </div>
            <div className="icon">
              <RiHospitalFill size={35} />
            </div>
          </div>
          <div className="emergency_hospital__card">
            <div>
              <h2>Emergency Hospitals</h2>
              <p>109</p>
            </div>
            <div className="icon">
              <FaHospitalAlt size={35} />
            </div>
          </div>
        </div>
        {/* <h1>Latest Appointment</h1>
        <form>
          <div className="overflow-x-auto latest_appointment">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Patient's Name</th>
                  <th>Age</th>
                  <th>Doctor Assigned</th>
                  <th>Timing</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Abhishek</td>
                  <td>27</td>
                  <td>
                    <div className=" doctor_name">
                      <select name="selectedFruit">
                        <option>Select Doctor</option>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <TimePicker value="07:00" />
                    </div>
                  </td>
                  <td>12/16/2020</td>
                  <td>
                    <div className="action_icon">
                      <div className="lg:tooltip" data-tip="cancel">
                        <MdCancel size={22} color="Red" />
                      </div>
                      <div className="lg:tooltip" data-tip="success">
                        <IoIosCheckmarkCircle size={22} color="green" />
                      </div>
                      <div className="lg:tooltip" data-tip="approve">
                        <MdOutlineGppGood size={22} color="blue" />
                      </div>
                      <div className="lg:tooltip" data-tip="edit">
                        <GrView size={20} />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Sumit</td>
                  <td>18</td>
                  <td>
                    <div className=" doctor_name">
                      <select name="selectedFruit">
                        <option>Select Doctor</option>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <TimePicker value="07:00" />
                    </div>
                  </td>
                  <td>12/16/2020</td>
                  <td>
                    <div className="action_icon ">
                      <div className="lg:tooltip" data-tip="cancel">
                        <MdCancel size={22} color="Red" />
                      </div>
                      <div className="lg:tooltip" data-tip="success">
                        <IoIosCheckmarkCircle size={22} color="green" />
                      </div>
                      <div className="lg:tooltip" data-tip="approve">
                        <MdOutlineGppGood size={22} color="blue" />
                      </div>
                      <div className="lg:tooltip" data-tip="edit">
                        <GrView size={20} />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Ankur</td>
                  <td>18</td>
                  <td>
                    <div className=" doctor_name">
                      <select name="selectedFruit">
                        <option>Select Doctor</option>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <TimePicker value="07:00" />
                    </div>
                  </td>
                  <td>12/16/2020</td>
                  <td>
                    <div className="action_icon ">
                      <div className="lg:tooltip" data-tip="cancel">
                        <MdCancel size={22} color="Red" />
                      </div>
                      <div className="lg:tooltip" data-tip="success">
                        <IoIosCheckmarkCircle size={22} color="green" />
                      </div>
                      <div className="lg:tooltip" data-tip="approve">
                        <MdOutlineGppGood size={22} color="blue" />
                      </div>
                      <div className="lg:tooltip" data-tip="edit">
                        <GrView size={20} />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Dashrath</td>
                  <td>29</td>
                  <td>
                    <div className=" doctor_name">
                      <select name="selectedFruit">
                        <option>Select Doctor</option>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <TimePicker value="07:00" />
                    </div>
                  </td>
                  <td>12/16/2020</td>
                  <td>
                    <div className="action_icon">
                      <div className="lg:tooltip" data-tip="cancel">
                        <MdCancel size={22} color="Red" />
                      </div>
                      <div className="lg:tooltip" data-tip="success">
                        <IoIosCheckmarkCircle size={22} color="green" />
                      </div>
                      <div className="lg:tooltip" data-tip="approve">
                        <MdOutlineGppGood size={22} color="blue" />
                      </div>
                      <div className="lg:tooltip" data-tip="edit">
                        <GrView size={20} />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Mamta</td>
                  <td>23</td>
                  <td>
                    <div className=" doctor_name">
                      <select name="selectedFruit">
                        <option>Select Doctor</option>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <TimePicker value="07:00" />
                    </div>
                  </td>
                  <td>12/16/2020</td>
                  <td>
                    <div className=" action_icon">
                      <div className="lg:tooltip" data-tip="cancel">
                        <MdCancel size={22} color="Red" />
                      </div>
                      <div className="lg:tooltip" data-tip="success">
                        <IoIosCheckmarkCircle size={22} color="green" />
                      </div>
                      <div className="lg:tooltip" data-tip="approve">
                        <MdOutlineGppGood size={22} color="blue" />
                      </div>
                      <div className="lg:tooltip" data-tip="edit">
                        <GrView size={20} />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form> */}
      </div>
    </>
  );
};

export default Dashboard;
