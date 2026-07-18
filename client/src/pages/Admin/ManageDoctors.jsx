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

  return (
    <div className="appointment-box">
      <h1>Manage Doctors</h1>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter doctor name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Specialization</label>
        <input
          type="text"
          name="specialization"
          placeholder="Enter specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingId ? "Update Doctor" : "Add Doctor"}
        </button>

        {editingId && (
          <button type="button" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      <table className="appointment-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {doctors.length === 0 ? (
            <tr>
              <td colSpan="4">No doctors found.</td>
            </tr>
          ) : (
            doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.specialization}</td>
                <td>
                  <button type="button" onClick={() => handleEdit(doctor)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(doctor.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ManageDoctors;
