import React from "react";
import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <h2>MediSphere</h2>

      <div className="navbar-right">
        <FaBell />
        {/* <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="profile-img"
        /> */}
      </div>
    </div>
  );
}

export default Navbar;