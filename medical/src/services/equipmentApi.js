const API_URL = "http://localhost:3000/equipment";

// Get all equipment
export const getEquipment = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch equipment");
  }

  return await response.json();
};

// Get equipment by ID
export const getEquipmentById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch equipment");
  }

  return await response.json();
};

// Add equipment
export const createEquipment = async (equipment) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipment),
  });

  if (!response.ok) {
    throw new Error("Failed to create equipment");
  }

  return await response.json();
};

// Update equipment
export const updateEquipment = async (id, equipment) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipment),
  });

  if (!response.ok) {
    throw new Error("Failed to update equipment");
  }

  return await response.json();
};

// Delete equipment
export const deleteEquipment = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete equipment");
  }

  return true;
};