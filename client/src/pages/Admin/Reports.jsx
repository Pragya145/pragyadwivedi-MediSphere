import React from "react";
import {
  FaCalendarCheck,
  FaCheckCircle,
  FaClock,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";

const SUMMARY = {
  totalPatients: 248,
  totalDoctors: 36,
  totalAppointments: 512,
  completedAppointments: 387,
  pendingAppointments: 74,
};

const RECENT_ACTIVITY = [
  {
    id: 1,
    patient: "Pragya Dwivedi",
    doctor: "Dr. Anil Sharma",
    date: "18 July 2026",
    status: "Completed",
  },
  {
    id: 2,
    patient: "Rahul Verma",
    doctor: "Dr. Priya Gupta",
    date: "18 July 2026",
    status: "Pending",
  },
  {
    id: 3,
    patient: "Ankit Singh",
    doctor: "Dr. Rajesh Mehta",
    date: "17 July 2026",
    status: "Confirmed",
  },
  {
    id: 4,
    patient: "Sneha Patel",
    doctor: "Dr. Meera Reddy",
    date: "17 July 2026",
    status: "Completed",
  },
  {
    id: 5,
    patient: "Vikram Joshi",
    doctor: "Dr. Anil Sharma",
    date: "16 July 2026",
    status: "Pending",
  },
  {
    id: 6,
    patient: "Kavya Nair",
    doctor: "Dr. Priya Gupta",
    date: "16 July 2026",
    status: "Confirmed",
  },
  {
    id: 7,
    patient: "Arjun Desai",
    doctor: "Dr. Rajesh Mehta",
    date: "15 July 2026",
    status: "Completed",
  },
  {
    id: 8,
    patient: "Meera Iyer",
    doctor: "Dr. Meera Reddy",
    date: "15 July 2026",
    status: "Pending",
  },
];

function Reports() {
  return (
    <div className="appointment-box admin-reports">
      <div className="admin-reports-header">
        <div>
          <h1>Reports</h1>
          <p className="text-muted">
            Overview of hospital activity, appointments, and recent patient
            interactions.
          </p>
        </div>
      </div>

      <div className="cards admin-reports-stats">
        <div className="card">
          <FaUsers />
          <h3>{SUMMARY.totalPatients}</h3>
          <p>Total Patients</p>
        </div>
        <div className="card">
          <FaUserMd />
          <h3>{SUMMARY.totalDoctors}</h3>
          <p>Total Doctors</p>
        </div>
        <div className="card">
          <FaCalendarCheck />
          <h3>{SUMMARY.totalAppointments}</h3>
          <p>Total Appointments</p>
        </div>
        <div className="card">
          <FaCheckCircle />
          <h3>{SUMMARY.completedAppointments}</h3>
          <p>Completed Appointments</p>
        </div>
        <div className="card">
          <FaClock />
          <h3>{SUMMARY.pendingAppointments}</h3>
          <p>Pending Appointments</p>
        </div>
      </div>

      <div className="admin-reports-section">
        <h2>Recent Activity</h2>
        <p className="text-muted">Latest appointment updates across all departments.</p>

        <div className="admin-reports-table-wrap">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {RECENT_ACTIVITY.map((item) => (
                <tr key={item.id}>
                  <td>{item.patient}</td>
                  <td>{item.doctor}</td>
                  <td>{item.date}</td>
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
      </div>

      <style>{`
        .admin-reports-header {
          margin-bottom: 0.5rem;
        }

        .admin-reports-header p {
          margin-top: 0.5rem;
        }

        .admin-reports-stats {
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .admin-reports-stats .card {
          flex: 1 1 180px;
          min-width: 160px;
        }

        .admin-reports-stats .card h3 {
          margin-top: 0.75rem;
          font-size: 1.75rem;
          color: var(--color-text);
        }

        .admin-reports-section {
          margin-top: 2rem;
        }

        .admin-reports-section h2 {
          margin-bottom: 0.25rem;
        }

        .admin-reports-section > p {
          margin-bottom: 0;
        }

        .admin-reports-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-top: 1.25rem;
        }

        @media (max-width: 768px) {
          .admin-reports-stats .card {
            width: 100%;
          }

          .admin-reports-section h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Reports;
