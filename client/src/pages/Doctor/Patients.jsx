import React from "react";

function Patients() {

  const patients = [
    {
      id: 1,
      name: "Pragya Dwivedi",
      age: 21,
      disease: "Migraine"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      age: 30,
      disease: "Diabetes"
    },
    {
      id: 3,
      name: "Priya Singh",
      age: 26,
      disease: "Skin Allergy"
    }
  ];

  return (
    <div className="appointment-box">

      <h1>Patients</h1>

      <table className="appointment-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Disease</th>
          </tr>
        </thead>

        <tbody>

          {patients.map((patient) => (

            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.disease}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Patients;