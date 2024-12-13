import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import logo from "../assets/care plus.png";
import { UserData } from "../Context/UserContext";

const Navbar = () => {
  const { isAuth, logoutUser, user } = UserData();
  const navigate = useNavigate();

  //
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };
  return (
    <div className="nav-container max-w-full md:px-20 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/hospitals">Hospitals</Link>
              </li>
              <li>
                <Link to="/emergency">Emergency</Link>
              </li>
              <li>
                <Link to="/complaint">Complaint</Link>
              </li>
              <li>
                <Link to="/digital-cilinic">Digital Cilinic</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/awarness">Awarness</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" className="h-14" />
          </Link>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/hospitals">Hospitals</Link>
            </li>
            <li>
              <Link to="/emergency">Emergency</Link>
            </li>
            <li>
              <Link to="/digital-cilinic">Digital Cilinic</Link>
            </li>
            <li>
              <Link to="/complaint">Complaint</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/awarness">Awarness</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {isAuth ? (
            <div className="indicator mr-5">
              <span className="indicator-item badge bg-red-500"></span>
              <div className="grid place-items-center">
                <Link to="/notifications">
                  <p>
                    <IoIosNotifications size={35} />
                  </p>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
          {isAuth ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="btn">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/my-appointment" className="btn">
                    Appointments
                  </Link>
                </li>

                <li>
                  <Link to="/mybookmarks" className="btn">
                    My Bookmarks
                  </Link>
                </li>
                <li>
                  <Link to="/my-billings" className="btn">
                    Billing
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={handleLogout} className="btn">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login <span>OR</span>
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
