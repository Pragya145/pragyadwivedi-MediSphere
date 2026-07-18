import React, { useEffect, useState } from "react";
import {
  getAllPatients,
  createPatient,
  updatePatient,
  deletePatient,
} from "../../services/patientService";

function ManagePatients() {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [editingId, setEditingId] = useState(null);

  const loadPatients = async () => {
    const data = await getAllPatients();
    setPatients(data);
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({ name: "", age: "" });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updatePatient(editingId, formData);
    } else {
      await createPatient(formData);
    }

    resetForm();
    loadPatients();
  };

  const handleEdit = (patient) => {
    setEditingId(patient.id);
    setFormData({
      name: patient.name,
      age: String(patient.age),
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this patient?")) {
      return;
    }

    await deletePatient(id);

    if (editingId === id) {
      resetForm();
    }

    loadPatients();
  };

  return (
    <div className="appointment-box">
      <h1>Manage Patients</h1>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter patient name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          required
        />

        <button type="submit">
          {editingId ? "Update Patient" : "Add Patient"}
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
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {patients.length === 0 ? (
            <tr>
              <td colSpan="4">No patients found.</td>
            </tr>
          ) : (
            patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>
                  <button type="button" onClick={() => handleEdit(patient)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(patient.id)}>
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

export default ManagePatients;
