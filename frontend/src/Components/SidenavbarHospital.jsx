import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/care plus.png";
import profile from "../assets/appointment.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { FaTruckMedical } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { FaHospital } from "react-icons/fa6";

const SidenavbarHospital = () => {
  return (
    <>
      <div>
        <div className="drawer lg:drawer-open">
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
              <li>
                <img
                  className=" items-center m-auto"
                  src={logo}
                  alt=""
                  width={200}
                />
              </li>
              <div>
                <Link to="/hospital/home">
                  <div className="tab_link tab_link_active ">
                    <LuLayoutDashboard size={20} />
                    <li>Dashboard</li>
                  </div>
                </Link>

                <Link to="/hospital/add-hospital">
                  <div className="tab_link tab_link_active">
                    <FaHospital size={22} />
                    <li>Hospital</li>
                  </div>
                </Link>
                <Link to="/hospital/doctors">
                  <div className="tab_link tab_link_active">
                    <FaUserDoctor size={20} />
                    <li>Doctor</li>
                  </div>
                </Link>
                <Link to="/hospital/ambulance">
                  <div className="tab_link tab_link_active">
                    <FaTruckMedical size={20} />
                    <li>Ambulance</li>
                  </div>
                </Link>

                <Link to="/hospital/medicals">
                  <div className="tab_link tab_link_active">
                    <GiMedicines size={20} />
                    <li>Medical</li>
                  </div>
                </Link>
                <Link to="/hospital/equipments">
                  <div className="tab_link tab_link_active">
                    <FaBriefcaseMedical size={20} />
                    <li>Equipment</li>
                  </div>
                </Link>
                <Link to="/hospital/jobs">
                  <div className="tab_link tab_link_active">
                    <IoNewspaper size={20} />
                    <li>Job</li>
                  </div>
                </Link>
              </div>
              <div className="doctor_profile-card">
                {/* profile */}

                <img src={profile} alt="" />
                <p className=" pr-4">Dr. John Doe</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidenavbarHospital;
