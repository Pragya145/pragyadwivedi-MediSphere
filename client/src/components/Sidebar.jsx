import React from "react";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaCalendarAlt,
  FaFileMedical,
  FaUsers,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { FaUserDoctor } from "react-icons/fa6";

function Sidebar({ role }) {

  const menus = {

    patient: [

      { name: "Dashboard", path: "/patient/dashboard", icon: <FaHome /> },

      { name: "Book Appointment", path: "/patient/book-appointment", icon: <FaCalendarAlt /> },

      { name: "My Appointments", path: "/patient/my-appointments", icon: <FaCalendarAlt /> },

      { name: "Medical History", path: "/patient/medical-history", icon: <FaFileMedical /> },

      { name: "Profile", path: "/patient/profile", icon: <FaUser /> }

    ],

    doctor: [

      { name: "Dashboard", path: "/doctor/dashboard", icon: <FaHome /> },

      { name: "Patients", path: "/doctor/patients", icon: <FaUsers /> },

      { name: "Appointments", path: "/doctor/appointments", icon: <FaCalendarAlt /> },

      { name: "Prescriptions", path: "/doctor/prescriptions", icon: <FaFileMedical /> },

      { name: "Profile", path: "/doctor/profile", icon: <FaUserDoctor /> }

    ],

    admin: [

      { name: "Dashboard", path: "/admin/dashboard", icon: <FaHome /> },

      { name: "Doctors", path: "/admin/doctors", icon: <FaUserDoctor /> },

      { name: "Patients", path: "/admin/patients", icon: <FaUsers /> },

      { name: "Appointments", path: "/admin/appointments", icon: <FaCalendarAlt /> },

      { name: "Reports", path: "/admin/reports", icon: <FaChartBar /> }

    ]

  };

  return (

    <div className="sidebar">

      <h2>MediSphere</h2>

      <ul>

        {menus[role]?.map((item, index) => (

          <li key={index}>

            <Link to={item.path}>

              {item.icon}

              <span>{item.name}</span>

            </Link>

          </li>

        ))}

        <li>

          <Link to="/">

            <FaSignOutAlt />

            <span>Logout</span>

          </Link>

        </li>

      </ul>

    </div>

  );

}

export default Sidebar;