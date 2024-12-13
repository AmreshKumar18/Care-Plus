import React from "react";
import Sidenavbar from "../../Components/Sidenavbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className=" flex">
        <Sidenavbar />
        <Outlet />
      </div>
    </>
  );
};

export default Main;
