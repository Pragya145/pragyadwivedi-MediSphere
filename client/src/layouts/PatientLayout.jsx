import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function PatientLayout() {
  return (
    <div className="dashboard">

      <Sidebar role="patient" />

      <div className="main-content">

        <Navbar />

        <div className="content-area">

          <Outlet />

        </div>

      </div>

    </div>
  );
}

export default PatientLayout;