import React, { useEffect, useState } from "react";
import {
  getAllDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../../services/doctorService";

function ManageDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({ name: "", specialization: "" });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const loadDoctors = async () => {
    const data = await getAllDoctors();
    setDoctors(data);
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({ name: "", specialization: "" });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateDoctor(editingId, formData);
    } else {
      await createDoctor(formData);
    }

    resetForm();
    loadDoctors();
  };

  const handleEdit = (doctor) => {
    setEditingId(doctor.id);
    setFormData({
      name: doctor.name,
      specialization: doctor.specialization,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this doctor?")) {
      return;
    }

    await deleteDoctor(id);

    if (editingId === id) {
      resetForm();
    }

    loadDoctors();
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const query = searchTerm.toLowerCase();
    return (
      doctor.name.toLowerCase().includes(query) ||
      doctor.specialization.toLowerCase().includes(query)
    );
  });

  const isEditing = Boolean(editingId);

  return (
    <div className="appointment-box admin-manage">
      <div className="admin-manage-header">
        <h1>Manage Doctors</h1>
        <p className="text-muted">
          Add, update, and manage doctor profiles and specializations.
        </p>
      </div>

      <div className="admin-manage-form-section">
        <div className="admin-manage-form-heading">
          <h2>{isEditing ? "Update Doctor" : "Add New Doctor"}</h2>
          <span
            className={`status ${isEditing ? "pending" : "confirmed"}`}
          >
            {isEditing ? "Edit Mode" : "Add Mode"}
          </span>
        </div>

        <form className="appointment-form admin-manage-form" onSubmit={handleSubmit}>
          <div className="admin-manage-form-grid">
            <div className="admin-manage-field">
              <label htmlFor="doctor-name">Name</label>
              <input
                id="doctor-name"
                type="text"
                name="name"
                placeholder="Enter doctor name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="admin-manage-field">
              <label htmlFor="doctor-specialization">Specialization</label>
              <input
                id="doctor-specialization"
                type="text"
                name="specialization"
                placeholder="Enter specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="admin-manage-form-actions">
            <button type="submit">
              {isEditing ? "Update Doctor" : "Add Doctor"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="admin-manage-table-section">
        <div className="admin-manage-table-header">
          <h2>Doctor Records</h2>
          <input
            type="text"
            placeholder="Search by name or specialization..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="admin-manage-table-wrap">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Specialization</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {doctors.length === 0 ? (
                <tr>
                  <td colSpan="5" className="admin-manage-empty">
                    No doctors registered yet. Add your first doctor using the
                    form above.
                  </td>
                </tr>
              ) : filteredDoctors.length === 0 ? (
                <tr>
                  <td colSpan="5" className="admin-manage-empty">
                    No doctors match your search. Try a different name or
                    specialization.
                  </td>
                </tr>
              ) : (
                filteredDoctors.map((doctor) => (
                  <tr key={doctor.id}>
                    <td>{doctor.id}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.specialization}</td>
                    <td>
                      <span className="status confirmed">Active</span>
                    </td>
                    <td>
                      <div className="admin-manage-actions">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => handleEdit(doctor)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(doctor.id)}
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
      </div>

      <style>{`
        .admin-manage-header {
          margin-bottom: 0.5rem;
        }

        .admin-manage-header p {
          margin-top: 0.5rem;
        }

        .admin-manage-form-section {
          margin-top: 1.5rem;
          padding: 1.25rem;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
        }

        .admin-manage-form-heading {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .admin-manage-form-heading h2 {
          font-size: 1.125rem;
        }

        .admin-manage-form {
          margin-top: 0;
        }

        .admin-manage-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .admin-manage-field {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .admin-manage-field label {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          color: var(--color-text);
        }

        .admin-manage-form-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.25rem;
        }

        .admin-manage-form-actions button {
          margin-top: 0;
          width: auto;
        }

        .admin-manage-table-section {
          margin-top: 2rem;
        }

        .admin-manage-table-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .admin-manage-table-header h2 {
          font-size: 1.125rem;
        }

        .admin-manage-table-header input {
          flex: 1 1 240px;
          max-width: 320px;
        }

        .admin-manage-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .admin-manage-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .admin-manage-actions .btn {
          margin-top: 0;
          width: auto;
        }

        .admin-manage-empty {
          text-align: center;
          padding: 2rem 1rem !important;
          color: var(--color-muted);
          font-size: var(--font-size-sm);
        }

        @media (max-width: 768px) {
          .admin-manage-form-grid {
            grid-template-columns: 1fr;
          }

          .admin-manage-table-header {
            flex-direction: column;
            align-items: stretch;
          }

          .admin-manage-table-header input {
            max-width: 100%;
          }

          .admin-manage-form-actions {
            flex-direction: column;
          }

          .admin-manage-form-actions button {
            width: 100%;
          }

          .admin-manage-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .admin-manage-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default ManageDoctors;
