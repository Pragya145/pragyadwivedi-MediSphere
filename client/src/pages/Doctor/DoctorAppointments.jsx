import React from "react";

function DoctorAppointments() {

  const appointments = [
    {
      id: 1,
      patient: "Pragya Dwivedi",
      date: "20 July 2026",
      time: "10:30 AM",
      status: "Pending"
    },
    {
      id: 2,
      patient: "Rahul Sharma",
      date: "20 July 2026",
      time: "11:30 AM",
      status: "Confirmed"
    },
    {
      id: 3,
      patient: "Ankit Verma",
      date: "21 July 2026",
      time: "9:00 AM",
      status: "Completed"
    }
  ];

  return (
    <div className="appointment-box">

      <h1>Appointments</h1>

      <table className="appointment-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {appointments.map((appointment) => (

            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.patient}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <span className={`status ${appointment.status.toLowerCase()}`}>
                  {appointment.status}
                </span>
              </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DoctorAppointments;