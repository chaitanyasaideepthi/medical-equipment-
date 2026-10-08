const API_URL =
  "https://6ac66addbea0e72cf5c90489.mockapi.io/api/equipment";

export const getEquipment = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch equipment");
  }

  return await response.json();
};

export const createEquipment = async (data) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to add equipment");
  }

  return await response.json();
};

export const updateEquipment = async (id, data) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update equipment");
  }

  return await response.json();
};

export const deleteEquipment = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete equipment");
  }

  return true;
};