import React from "react";
import {
  FaUserInjured,
  FaCalendarCheck,
  FaFilePrescription,
  FaUserDoctor,
} from "react-icons/fa6";

function DoctorDashboard() {
  return (
    <>
      <div className="welcome">
        <h1>Welcome Doctor 👨‍⚕️</h1>
        <p>Manage appointments and patients efficiently.</p>
      </div>

      <div className="cards">

        <div className="card">
          <FaUserInjured size={35} />
          <h3>Total Patients</h3>
          <p>145</p>
        </div>

        <div className="card">
          <FaCalendarCheck size={35} />
          <h3>Today's Appointments</h3>
          <p>12</p>
        </div>

        <div className="card">
          <FaFilePrescription size={35} />
          <h3>Prescriptions</h3>
          <p>87</p>
        </div>

        <div className="card">
          <FaUserDoctor size={35} />
          <h3>Experience</h3>
          <p>10 Years</p>
        </div>

      </div>

      <div className="appointment-box">

        <h2>Today's Schedule</h2>

        <table className="appointment-table">

          <thead>
            <tr>
              <th>Patient</th>
              <th>Time</th>
              <th>Department</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Pragya Dwivedi</td>
              <td>10:30 AM</td>
              <td>Cardiology</td>
            </tr>

            <tr>
              <td>Rahul Sharma</td>
              <td>11:30 AM</td>
              <td>Cardiology</td>
            </tr>

          </tbody>

        </table>

      </div>
    </>
  );
}

export default DoctorDashboard;