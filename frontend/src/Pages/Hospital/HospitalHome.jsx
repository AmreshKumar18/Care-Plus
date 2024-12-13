import React from "react";
import { TimePicker } from "@hilla/react-components/TimePicker.js";
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
import { MdCancel } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import { MdOutlineGppGood } from "react-icons/md";
import { GrView } from "react-icons/gr";

const HospitalHome = () => {
  return (
    <>
      <div className="dashboard">
        <div className="appointment_card_sec">
          <div className="appointment_card">
            <div>
              <h2>Total Appointment</h2>
              <p>109</p>
            </div>
            <div className="icon">
              <BsFillFileEarmarkMedicalFill size={35} />
            </div>
          </div>
          <div className="doctor_card">
            <div>
              <h2>Total Doctors</h2>
              <p>109</p>
            </div>
            <div className="icon">
              <FaUserDoctor size={35} />
            </div>
          </div>
          <div className="ambulance_card">
            <div>
              <h2>Total Ambulances</h2>
              <p>109</p>
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
          <div className="rating_card">
            <div>
              <h2>Rating & Reviews</h2>
              <p>109</p>
            </div>
            <div className="icon">
              <VscFeedback size={35} />
            </div>
          </div>
          <div className="total_user_card">
            <div>
              <h2>Total Users</h2>
              <p>109</p>
            </div>
            <div className="icon">
              <FaUsers size={35} />
            </div>
          </div>
          <div className="appointment_card">
            <div>
              <h2>Total Jobs</h2>
              <p>109</p>
            </div>
            <div className="icon">
              <FaFileSignature size={35} />
            </div>
          </div>
          <div className="hospitals_card">
            <div>
              <h2>Total Hospitals</h2>
              <p>109</p>
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
        <h1>Latest Appointment</h1>
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
        </form>
      </div>
    </>
  );
};

export default HospitalHome;
