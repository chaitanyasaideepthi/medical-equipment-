const API_URL = "http://localhost:3000/equipment";

// GET - Get all equipment
export const getEquipment = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch equipment");
  }

  return await response.json();
};

// GET - Get one equipment
export const getEquipmentById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch equipment");
  }

  return await response.json();
};

// POST - Add equipment
export const addEquipment = async (equipment) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(equipment)
  });

  if (!response.ok) {
    throw new Error("Failed to add equipment");
  }

  return await response.json();
};

// PUT - Update equipment
export const updateEquipment = async (id, equipment) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(equipment)
  });

  if (!response.ok) {
    throw new Error("Failed to update equipment");
  }

  return await response.json();
};

// DELETE - Delete equipment
export const deleteEquipment = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Failed to delete equipment");
  }

  return true;
};