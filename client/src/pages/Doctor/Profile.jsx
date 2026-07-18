import React from "react";
import { FaUserMd } from "react-icons/fa";

const DOCTOR = {
  name: "Dr. Anil Sharma",
  specialization: "Cardiology",
  qualification: "MBBS, MD (Cardiology)",
  experience: "12 years",
  email: "anil.sharma@medisphere.com",
  phone: "+91 98765 43210",
  hospital: "MediSphere Heart & Wellness Clinic",
  availability: "Mon – Fri, 9:00 AM – 5:00 PM",
};

function Profile() {
  const handleEdit = () => {
    window.alert("Edit profile (demo only).");
  };

  return (
    <div className="appointment-box doctor-profile">
      <div className="doctor-profile-header">
        <h1>Doctor Profile</h1>
        <p className="text-muted">View and manage your professional information.</p>
      </div>

      <div className="profile-card doctor-profile-card">
        <div className="doctor-profile-avatar">
          <FaUserMd aria-hidden="true" />
        </div>

        <h2>{DOCTOR.name}</h2>
        <p className="doctor-profile-specialization">{DOCTOR.specialization}</p>

        <div className="doctor-profile-details">
          <div className="doctor-profile-row">
            <span className="doctor-profile-label">Qualification</span>
            <span className="doctor-profile-value">{DOCTOR.qualification}</span>
          </div>
          <div className="doctor-profile-row">
            <span className="doctor-profile-label">Experience</span>
            <span className="doctor-profile-value">{DOCTOR.experience}</span>
          </div>
          <div className="doctor-profile-row">
            <span className="doctor-profile-label">Email</span>
            <span className="doctor-profile-value">{DOCTOR.email}</span>
          </div>
          <div className="doctor-profile-row">
            <span className="doctor-profile-label">Phone</span>
            <span className="doctor-profile-value">{DOCTOR.phone}</span>
          </div>
          <div className="doctor-profile-row">
            <span className="doctor-profile-label">Hospital / Clinic</span>
            <span className="doctor-profile-value">{DOCTOR.hospital}</span>
          </div>
          <div className="doctor-profile-row">
            <span className="doctor-profile-label">Availability</span>
            <span className="doctor-profile-value">{DOCTOR.availability}</span>
          </div>
        </div>

        <button type="button" onClick={handleEdit}>
          Edit Profile
        </button>
      </div>

      <style>{`
        .doctor-profile-header {
          margin-bottom: 0.5rem;
        }

        .doctor-profile-header p {
          margin-top: 0.5rem;
        }

        .doctor-profile-card {
          width: 100%;
          max-width: 560px;
          margin: 1.5rem auto 0;
          text-align: center;
        }

        .doctor-profile-avatar {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.25rem;
          border-radius: 50%;
          background: var(--color-primary-light);
          border: 3px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--color-primary);
        }

        .doctor-profile-card h2 {
          font-size: 1.5rem;
          color: var(--color-text);
        }

        .doctor-profile-specialization {
          margin-top: 0.35rem;
          color: var(--color-primary);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-sm);
        }

        .doctor-profile-details {
          margin-top: 1.75rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .doctor-profile-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .doctor-profile-row:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }

        .doctor-profile-label {
          font-size: var(--font-size-xs);
          font-weight: var(--font-weight-semibold);
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .doctor-profile-value {
          font-size: var(--font-size-sm);
          color: var(--color-text);
          line-height: var(--line-height-relaxed);
        }

        .doctor-profile-card button {
          margin-top: 1.75rem;
          width: 100%;
        }

        @media (min-width: 480px) {
          .doctor-profile-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 1rem;
          }

          .doctor-profile-label {
            flex: 0 0 140px;
          }

          .doctor-profile-value {
            flex: 1;
            text-align: right;
          }
        }

        @media (max-width: 479px) {
          .doctor-profile-card {
            padding: var(--space-xl) var(--space-lg);
          }
        }
      `}</style>
    </div>
  );
}

export default Profile;
