import { getStoredData, saveStoredData, STORAGE_KEYS } from "./storage";

const SEED_DOCTORS = [
  { id: 1, name: "Dr. Sharma", specialization: "Cardiologist" },
  { id: 2, name: "Dr. Gupta", specialization: "Neurologist" },
  { id: 3, name: "Dr. Singh", specialization: "Dermatologist" },
];

function readDoctors() {
  return getStoredData(STORAGE_KEYS.DOCTORS, SEED_DOCTORS);
}

function writeDoctors(doctors) {
  saveStoredData(STORAGE_KEYS.DOCTORS, doctors);
}

function generateId(items) {
  if (items.length === 0) return 1;
  return Math.max(...items.map((item) => item.id)) + 1;
}

/**
 * Replace localStorage calls with fetch() when connecting Spring Boot backend.
 * Example: return fetch("/api/doctors").then((res) => res.json());
 */
export async function getAllDoctors() {
  return readDoctors();
}

export async function getDoctorById(id) {
  const doctors = readDoctors();
  return doctors.find((doctor) => doctor.id === id) ?? null;
}

export async function createDoctor(doctor) {
  const doctors = readDoctors();
  const newDoctor = {
    id: generateId(doctors),
    name: doctor.name,
    specialization: doctor.specialization,
  };

  writeDoctors([...doctors, newDoctor]);
  return newDoctor;
}

export async function updateDoctor(id, doctor) {
  const doctors = readDoctors();
  const index = doctors.findIndex((item) => item.id === id);

  if (index === -1) {
    throw new Error("Doctor not found");
  }

  const updatedDoctor = {
    ...doctors[index],
    name: doctor.name,
    specialization: doctor.specialization,
  };

  doctors[index] = updatedDoctor;
  writeDoctors(doctors);
  return updatedDoctor;
}

export async function deleteDoctor(id) {
  const doctors = readDoctors();
  const filtered = doctors.filter((doctor) => doctor.id !== id);

  if (filtered.length === doctors.length) {
    throw new Error("Doctor not found");
  }

  writeDoctors(filtered);
  return true;
}
