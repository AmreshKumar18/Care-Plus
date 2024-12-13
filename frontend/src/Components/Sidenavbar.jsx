import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/care plus.png";
import profile from "../assets/appointment.png";
import { MdPayments } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { FaTruckMedical } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBedPulse } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { FaHospital } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";

const Sidenavbar = () => {
  return (
    <>
      <div>
        <div className="drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn drawer-button lg:hidden"
            >
              <GiHamburgerMenu color="black" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
              {/* Sidebar content here */}
              <Link to="/">
                <li>
                  <img
                    className=" items-center m-auto"
                    src={logo}
                    alt=""
                    width={200}
                  />
                </li>
              </Link>
              <div>
                <Link to="/admin/dashboard">
                  <div className="tab_link tab_link_active ">
                    <LuLayoutDashboard size={20} />
                    <li>Dashboard</li>
                  </div>
                </Link>
                <Link to="/admin/appointments">
                  <div className="tab_link tab_link_active">
                    <FaBookMedical size={20} />
                    <li>Appointment</li>
                  </div>
                </Link>
                <Link to="/admin/add-hospital">
                  <div className="tab_link tab_link_active">
                    <FaHospital size={22} />
                    <li>Hospital</li>
                  </div>
                </Link>
                <Link to="/admin/doctors">
                  <div className="tab_link tab_link_active">
                    <FaUserDoctor size={20} />
                    <li>Doctor</li>
                  </div>
                </Link>
                <Link to="/admin/ambulance">
                  <div className="tab_link tab_link_active">
                    <FaTruckMedical size={20} />
                    <li>Ambulance</li>
                  </div>
                </Link>
                <Link to="/admin/beds">
                  <div className="tab_link tab_link_active">
                    <FaBedPulse size={20} />
                    <li>Bed</li>
                  </div>
                </Link>

                <Link to="/admin/medicals">
                  <div className="tab_link tab_link_active">
                    <GiMedicines size={20} />
                    <li>Medical</li>
                  </div>
                </Link>
                <Link to="/admin/jobs">
                  <div className="tab_link tab_link_active">
                    <IoNewspaper size={20} />
                    <li>Job</li>
                  </div>
                </Link>
                <Link to="/admin/add-awarness">
                  <div className="tab_link tab_link_active">
                    <i class="fa-solid fa-shield-halved fa-xl"></i>
                    <li>Awarness</li>
                  </div>
                </Link>
                <Link to="/admin/users">
                  <div className="tab_link tab_link_active">
                    <FaUsers size={22} />
                    <li>Users</li>
                  </div>
                </Link>
                <Link to="/admin/notification">
                  <div className="tab_link tab_link_active">
                    <MdNotificationsActive size={22} />
                    <li>Notification</li>
                  </div>
                </Link>
                <Link to="/admin/queries">
                  <div className="tab_link tab_link_active">
                    <i class="fa-solid fa-clipboard-question fa-xl"></i>
                    <li>Queries</li>
                  </div>
                </Link>
                <Link to="/admin/contact">
                  <div className="tab_link tab_link_active">
                    <i class="fa-solid fa-comment fa-xl"></i>
                    <li>Contact</li>
                  </div>
                </Link>
                <Link to="/admin/all-bill">
                  <div className="tab_link tab_link_active">
                    <MdPayments size={25} />
                    <li>Payments</li>
                  </div>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenavbar;
