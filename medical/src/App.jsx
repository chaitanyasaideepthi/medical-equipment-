import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import EquipmentList from "./components/EquipmentList/EquipmentList";
import EquipmentForm from "./components/EquipmentForm/EquipmentForm";

import {
  getEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
} from "./services/equipmentApi";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editingEquipment, setEditingEquipment] = useState(null);

  useEffect(() => {
    loadEquipment();
  }, []);

  const loadEquipment = async () => {
    try {
      const data = await getEquipment();
      setEquipment(data);
    } catch (error) {
      console.error("GET ERROR:", error);
      alert("Failed to load equipment");
    }
  };

  const handleSubmit = async (data) => {
    try {
      if (editingEquipment) {
        const updatedData = await updateEquipment(
          editingEquipment.id,
          data
        );

        setEquipment((prev) =>
          prev.map((item) =>
            item.id === editingEquipment.id
              ? updatedData
              : item
          )
        );

        setEditingEquipment(null);

        alert("Equipment updated successfully!");
      } else {
        const newData = await createEquipment(data);

        setEquipment((prev) => [...prev, newData]);

        alert("Notification added successfully!");
      }
    } catch (error) {
      console.error("SAVE ERROR:", error);
      alert("Failed to save equipment");
    }
  };

  const handleEdit = (item) => {
    console.log("EDIT ITEM:", item);

    setEditingEquipment(item);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    console.log("DELETE ID:", id);

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this equipment?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteEquipment(id);

      setEquipment((prev) =>
        prev.filter((item) => item.id !== id)
      );

      alert("Equipment deleted successfully!");
    } catch (error) {
      console.error("DELETE ERROR:", error);
      alert("Delete failed");
    }
  };

  const handleCancel = () => {
    setEditingEquipment(null);
  };

  return (
    <>
      <Navbar />

      <Dashboard equipment={equipment} />

      <EquipmentList
        equipment={equipment}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EquipmentForm
        editingEquipment={editingEquipment}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </>
  );
}

export default App;