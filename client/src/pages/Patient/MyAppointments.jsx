import React from "react";

function MyAppointments() {

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sharma",
      department: "Cardiology",
      date: "20 July 2026",
      time: "10:30 AM",
      status: "Confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Gupta",
      department: "Neurology",
      date: "23 July 2026",
      time: "2:00 PM",
      status: "Pending"
    },
    {
      id: 3,
      doctor: "Dr. Singh",
      department: "Dermatology",
      date: "25 July 2026",
      time: "11:00 AM",
      status: "Completed"
    }
  ];

  return (
    <div className="appointment-box">

      <h1>My Appointments</h1>

      <table className="appointment-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor</th>
            <th>Department</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {appointments.map((item) => (

            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.doctor}</td>
              <td>{item.department}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default MyAppointments;