const STORAGE_KEYS = {
  PATIENTS: "medisphere_patients",
  DOCTORS: "medisphere_doctors",
};

export function getStoredData(key, seedData = null) {
  const raw = localStorage.getItem(key);

  if (!raw) {
    if (seedData) {
      localStorage.setItem(key, JSON.stringify(seedData));
      return [...seedData];
    }
    return [];
  }

  return JSON.parse(raw);
}

export function saveStoredData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { STORAGE_KEYS };
