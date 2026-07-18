import React from "react";
import {
  FaUserDoctor,
  FaUserInjured,
  FaCalendarCheck,
  FaHospital
} from "react-icons/fa6";

function AdminDashboard() {

  return (
    <>

      <div className="welcome">

        <h1>Admin Dashboard 🏥</h1>

        <p>Hospital Overview</p>

      </div>

      <div className="cards">

        <div className="card">
          <FaUserDoctor size={35}/>
          <h3>Doctors</h3>
          <p>25</p>
        </div>

        <div className="card">
          <FaUserInjured size={35}/>
          <h3>Patients</h3>
          <p>420</p>
        </div>

        <div className="card">
          <FaCalendarCheck size={35}/>
          <h3>Appointments</h3>
          <p>98</p>
        </div>

        <div className="card">
          <FaHospital size={35}/>
          <h3>Departments</h3>
          <p>12</p>
        </div>

      </div>

    </>
  );

}

export default AdminDashboard;