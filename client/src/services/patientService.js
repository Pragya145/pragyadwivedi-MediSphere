import { getStoredData, saveStoredData, STORAGE_KEYS } from "./storage";

const SEED_PATIENTS = [
  { id: 1, name: "Pragya Dwivedi", age: 21 },
  { id: 2, name: "Rahul Sharma", age: 30 },
  { id: 3, name: "Priya Singh", age: 26 },
];

function readPatients() {
  return getStoredData(STORAGE_KEYS.PATIENTS, SEED_PATIENTS);
}

function writePatients(patients) {
  saveStoredData(STORAGE_KEYS.PATIENTS, patients);
}

function generateId(items) {
  if (items.length === 0) return 1;
  return Math.max(...items.map((item) => item.id)) + 1;
}

/**
 * Replace localStorage calls with fetch() when connecting Spring Boot backend.
 * Example: return fetch("/api/patients").then((res) => res.json());
 */
export async function getAllPatients() {
  return readPatients();
}

export async function getPatientById(id) {
  const patients = readPatients();
  return patients.find((patient) => patient.id === id) ?? null;
}

export async function createPatient(patient) {
  const patients = readPatients();
  const newPatient = {
    id: generateId(patients),
    name: patient.name,
    age: Number(patient.age),
  };

  writePatients([...patients, newPatient]);
  return newPatient;
}

export async function updatePatient(id, patient) {
  const patients = readPatients();
  const index = patients.findIndex((item) => item.id === id);

  if (index === -1) {
    throw new Error("Patient not found");
  }

  const updatedPatient = {
    ...patients[index],
    name: patient.name,
    age: Number(patient.age),
  };

  patients[index] = updatedPatient;
  writePatients(patients);
  return updatedPatient;
}

export async function deletePatient(id) {
  const patients = readPatients();
  const filtered = patients.filter((patient) => patient.id !== id);

  if (filtered.length === patients.length) {
    throw new Error("Patient not found");
  }

  writePatients(filtered);
  return true;
}
