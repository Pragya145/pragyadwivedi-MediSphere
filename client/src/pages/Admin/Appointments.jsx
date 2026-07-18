import React, { useState } from "react";
import { FaCalendarCheck, FaClock, FaUserMd, FaUsers } from "react-icons/fa";

const INITIAL_APPOINTMENTS = [
  {
    id: 1,
    patientName: "Pragya Dwivedi",
    doctorName: "Dr. Anil Sharma",
    date: "20 July 2026",
    time: "10:30 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    patientName: "Rahul Verma",
    doctorName: "Dr. Priya Gupta",
    date: "20 July 2026",
    time: "11:45 AM",
    status: "Pending",
  },
  {
    id: 3,
    patientName: "Ankit Singh",
    doctorName: "Dr. Rajesh Mehta",
    date: "21 July 2026",
    time: "9:00 AM",
    status: "Completed",
  },
  {
    id: 4,
    patientName: "Sneha Patel",
    doctorName: "Dr. Anil Sharma",
    date: "21 July 2026",
    time: "2:15 PM",
    status: "Pending",
  },
  {
    id: 5,
    patientName: "Vikram Joshi",
    doctorName: "Dr. Meera Reddy",
    date: "22 July 2026",
    time: "4:00 PM",
    status: "Confirmed",
  },
  {
    id: 6,
    patientName: "Kavya Nair",
    doctorName: "Dr. Priya Gupta",
    date: "23 July 2026",
    time: "11:00 AM",
    status: "Completed",
  },
];

function Appointments() {
  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredAppointments = appointments.filter((item) => {
    const matchesSearch =
      item.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.doctorName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: appointments.length,
    pending: appointments.filter((a) => a.status === "Pending").length,
    confirmed: appointments.filter((a) => a.status === "Confirmed").length,
    completed: appointments.filter((a) => a.status === "Completed").length,
  };

  const handleView = (appointment) => {
    window.alert(
      `Appointment #${appointment.id}\n\n` +
        `Patient: ${appointment.patientName}\n` +
        `Doctor: ${appointment.doctorName}\n` +
        `Date: ${appointment.date}\n` +
        `Time: ${appointment.time}\n` +
        `Status: ${appointment.status}`
    );
  };

  const handleEdit = (appointment) => {
    window.alert(
      `Edit appointment #${appointment.id} for ${appointment.patientName} (demo only).`
    );
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) {
      return;
    }

    setAppointments((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="appointment-box admin-appointments">
      <div className="admin-appointments-header">
        <div>
          <h1>Appointments</h1>
          <p className="text-muted">
            Manage and monitor all patient appointments across the hospital.
          </p>
        </div>
      </div>

      <div className="cards admin-appointments-stats">
        <div className="card">
          <FaCalendarCheck />
          <h3>{stats.total}</h3>
          <p>Total Appointments</p>
        </div>
        <div className="card">
          <FaClock />
          <h3>{stats.pending}</h3>
          <p>Pending</p>
        </div>
        <div className="card">
          <FaUserMd />
          <h3>{stats.confirmed}</h3>
          <p>Confirmed</p>
        </div>
        <div className="card">
          <FaUsers />
          <h3>{stats.completed}</h3>
          <p>Completed</p>
        </div>
      </div>

      <div className="admin-appointments-toolbar">
        <input
          type="text"
          placeholder="Search by patient or doctor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="admin-appointments-table-wrap">
        <table className="appointment-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Doctor Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan="7">No appointments found.</td>
              </tr>
            ) : (
              filteredAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.doctorName}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>
                    <span
                      className={`status ${appointment.status.toLowerCase()}`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td>
                    <div className="admin-appointments-actions">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => handleView(appointment)}
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleEdit(appointment)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(appointment.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <style>{`
        .admin-appointments-header {
          margin-bottom: 0.5rem;
        }

        .admin-appointments-header p {
          margin-top: 0.5rem;
        }

        .admin-appointments-stats {
          flex-wrap: wrap;
        }

        .admin-appointments-stats .card {
          flex: 1 1 180px;
          min-width: 160px;
        }

        .admin-appointments-stats .card h3 {
          margin-top: 0.75rem;
          font-size: 1.75rem;
          color: var(--color-text);
        }

        .admin-appointments-toolbar {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .admin-appointments-toolbar input {
          flex: 1 1 240px;
          max-width: 100%;
        }

        .admin-appointments-toolbar select {
          flex: 0 1 200px;
          max-width: 100%;
        }

        .admin-appointments-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-top: 1.5rem;
        }

        .admin-appointments-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .admin-appointments-actions .btn {
          margin-top: 0;
          width: auto;
          min-width: 4.5rem;
        }

        @media (max-width: 768px) {
          .admin-appointments-toolbar {
            flex-direction: column;
          }

          .admin-appointments-toolbar input,
          .admin-appointments-toolbar select {
            width: 100%;
            flex: 1 1 100%;
          }

          .admin-appointments-stats .card {
            width: 100%;
          }

          .admin-appointments-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .admin-appointments-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Appointments;
