import React, { useState } from "react";

function Prescription() {

  const [patient, setPatient] = useState("");
  const [medicine, setMedicine] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Prescription Added Successfully!");

    setPatient("");
    setMedicine("");
    setRemarks("");
  };

  return (

    <div className="appointment-box">

      <h1>Write Prescription</h1>

      <form className="appointment-form" onSubmit={handleSubmit}>

        <label>Patient Name</label>

        <input
          type="text"
          value={patient}
          onChange={(e)=>setPatient(e.target.value)}
          required
        />

        <label>Medicine</label>

        <input
          type="text"
          value={medicine}
          onChange={(e)=>setMedicine(e.target.value)}
          required
        />

        <label>Remarks</label>

        <textarea
          rows="4"
          value={remarks}
          onChange={(e)=>setRemarks(e.target.value)}
        />

        <button type="submit">
          Save Prescription
        </button>

      </form>

    </div>

  );

}

export default Prescription;