import React from "react";
import { Outlet } from "react-router-dom";
import SidenavbarHospital from "../../Components/SidenavbarHospital";

const Hospitallayout = () => {
  return (
    <div className=" flex">
      <SidenavbarHospital />
      <Outlet />
    </div>
  );
};

export default Hospitallayout;
