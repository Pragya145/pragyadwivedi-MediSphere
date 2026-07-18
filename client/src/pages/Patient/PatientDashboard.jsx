import React from "react";
import {
  FaCalendarCheck,
  FaFileMedical,
  FaUserDoctor,
} from "react-icons/fa6";

function PatientDashboard() {
  return (
    <>
      <div className="welcome">
        <h1>Good Morning 👋</h1>

        <p>Manage your health journey with MediSphere</p>
      </div>

      <div className="cards">
        <div className="card">
          <FaCalendarCheck />

          <h3>Appointments</h3>

          <p>2 Upcoming</p>
        </div>

        <div className="card">
          <FaFileMedical />

          <h3>Medical Records</h3>

          <p>5 Reports</p>
        </div>

        <div className="card">
          <FaUserDoctor />

          <h3>Doctors</h3>

          <p>Available 24/7</p>
        </div>
      </div>

      <div className="appointment-box">
        <h2>Upcoming Appointment</h2>

        <div className="appointment">
          <h3>Dr. Sharma</h3>

          <p>Cardiologist</p>

          <p>Tomorrow | 10:30 AM</p>

          <button>View Details</button>
        </div>
      </div>
    </>
  );
}

export default PatientDashboard;