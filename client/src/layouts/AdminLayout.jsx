import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminLayout() {
  return (
    <div className="dashboard">

      <Sidebar role="admin" />

      <div className="main-content">

        <Navbar />

        <div className="content-area">

          <Outlet />

        </div>

      </div>

    </div>
  );
}

export default AdminLayout;