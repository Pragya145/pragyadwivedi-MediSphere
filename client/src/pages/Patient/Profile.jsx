import React from "react";

function Profile() {

  return (

    <div className="appointment-box">

      <h1>Patient Profile</h1>

      <div className="profile-card">

        {/* <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="profile-picture"
        /> */}

        <h2>Pragya Dwivedi</h2>

        <p><strong>Email:</strong> pragyadwivedi2312@gmail.com</p>

        <p><strong>Phone:</strong> +91 9876543210</p>

        <p><strong>Age:</strong> 21</p>

        <p><strong>Blood Group:</strong> B+</p>

        <p><strong>Gender:</strong> Female</p>

        <p><strong>Address:</strong> Kanpur, Uttar Pradesh</p>

        <button>Edit Profile</button>

      </div>

    </div>

  );

}

export default Profile;