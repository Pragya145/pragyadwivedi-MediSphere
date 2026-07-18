import React, { useState } from "react";

function BookAppointment() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    department: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    alert(
      `Appointment Booked Successfully!

Patient: ${formData.patientName}
Doctor: ${formData.doctor}
Department: ${formData.department}
Date: ${formData.date}
Time: ${formData.time}`
    );

    setFormData({
      patientName: "",
      doctor: "",
      department: "",
      date: "",
      time: "",
      symptoms: "",
    });
  };

  return (
    <div className="appointment-box">
      <h1>Book Appointment</h1>

      <form className="appointment-form" onSubmit={handleBooking}>

        <label>Patient Name</label>
        <input
          type="text"
          name="patientName"
          placeholder="Enter your name"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <label>Select Doctor</label>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Choose Doctor</option>
          <option>Dr. Sharma</option>
          <option>Dr. Gupta</option>
          <option>Dr. Singh</option>
        </select>

        <label>Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Choose Department</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Dermatology</option>
          <option>Orthopedics</option>
        </select>

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Time Slot</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label>Symptoms</label>
        <textarea
          name="symptoms"
          rows="4"
          placeholder="Describe your symptoms..."
          value={formData.symptoms}
          onChange={handleChange}
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointment;