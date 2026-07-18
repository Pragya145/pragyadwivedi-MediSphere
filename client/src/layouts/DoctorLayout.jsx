import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DoctorLayout() {
  return (
    <div className="dashboard">

      <Sidebar role="doctor" />

      <div className="main-content">

        <Navbar />

        <div className="content-area">

          <Outlet />

        </div>

      </div>

    </div>
  );
}

export default DoctorLayout;