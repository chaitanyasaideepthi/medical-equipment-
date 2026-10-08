const API_URL =
  "https://6ac66addbea0e72cf5c90489.mockapi.io/api/equipment";

// GET all equipment
export const getEquipment = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch equipment");
  }

  return await response.json();
};

// CREATE equipment
export const createEquipment = async (equipmentData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipmentData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Create failed. Status: ${response.status}. ${errorText}`
    );
  }

  return await response.json();
};

// UPDATE equipment
export const updateEquipment = async (id, equipmentData) => {
  if (!id) {
    throw new Error("Equipment ID is missing");
  }

  const url = `${API_URL}/${id}`;

  console.log("UPDATE URL:", url);
  console.log("UPDATE DATA:", equipmentData);

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipmentData),
  });

  const responseText = await response.text();

  console.log("UPDATE STATUS:", response.status);
  console.log("UPDATE RESPONSE:", responseText);

  if (!response.ok) {
    throw new Error(
      `Update failed. Status: ${response.status}. ${responseText}`
    );
  }

  return JSON.parse(responseText);
};

// DELETE equipment
export const deleteEquipment = async (id) => {
  if (!id) {
    throw new Error("Equipment ID is missing");
  }

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Delete failed. Status: ${response.status}. ${errorText}`
    );
  }

  return await response.json();
};