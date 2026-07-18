import React from "react";

function MedicalHistory() {

  const records = [
    {
      id: 1,
      date: "10 July 2026",
      doctor: "Dr. Sharma",
      diagnosis: "High Blood Pressure",
      prescription: "Amlodipine 5mg"
    },
    {
      id: 2,
      date: "28 June 2026",
      doctor: "Dr. Gupta",
      diagnosis: "Migraine",
      prescription: "Paracetamol + Rest"
    },
    {
      id: 3,
      date: "12 June 2026",
      doctor: "Dr. Singh",
      diagnosis: "Skin Allergy",
      prescription: "Cetirizine"
    }
  ];

  return (
    <div className="appointment-box">

      <h1>Medical History</h1>

      <table className="appointment-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Diagnosis</th>
            <th>Prescription</th>
          </tr>
        </thead>

        <tbody>

          {records.map((record) => (

            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.date}</td>
              <td>{record.doctor}</td>
              <td>{record.diagnosis}</td>
              <td>{record.prescription}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default MedicalHistory;