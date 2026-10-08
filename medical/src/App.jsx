import { useEffect, useState } from "react";
import "./App.css";

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

  // Load equipment from MockAPI
  useEffect(() => {
    const loadEquipment = async () => {
      try {
        const data = await getEquipment();

        console.log("API DATA:", data);

        setEquipment(data);
      } catch (error) {
        console.error("Load error:", error);
        alert("Failed to load equipment.");
      }
    };

    loadEquipment();
  }, []);

  // Add / Update equipment
  const handleSubmit = async (equipmentData) => {
    try {
      // UPDATE
      if (editingEquipment) {
        console.log("EDITING EQUIPMENT:", editingEquipment);

        /*
          MockAPI ID can normally be:
          editingEquipment.id

          If id is not available, use equipmentId.
        */
        const id =
          editingEquipment.id ||
          editingEquipment.equipmentId;

        console.log("UPDATE ID:", id);

        const updatedEquipment = await updateEquipment(
          id,
          equipmentData
        );

        console.log(
          "UPDATED EQUIPMENT:",
          updatedEquipment
        );

        setEquipment((prevEquipment) =>
          prevEquipment.map((item) => {
            const itemId =
              item.id || item.equipmentId;

            return itemId === id
              ? updatedEquipment
              : item;
          })
        );

        setEditingEquipment(null);

        alert("Equipment updated successfully!");

        return;
      }

      // ADD
      const newEquipment = await createEquipment(
        equipmentData
      );

      console.log("NEW EQUIPMENT:", newEquipment);

      setEquipment((prevEquipment) => [
        ...prevEquipment,
        newEquipment,
      ]);

      alert("Equipment added successfully!");
    } catch (error) {
      console.error("Save error:", error);

      alert(
        `Failed to save equipment: ${error.message}`
      );
    }
  };

  // Edit equipment
  const handleEdit = (item) => {
    console.log("SELECTED EQUIPMENT:", item);

    setEditingEquipment(item);

    setTimeout(() => {
      const form = document.getElementById(
        "add-equipment"
      );

      if (form) {
        form.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Delete equipment
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this equipment?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteEquipment(id);

      setEquipment((prevEquipment) =>
        prevEquipment.filter((item) => {
          const itemId =
            item.id || item.equipmentId;

          return itemId !== id;
        })
      );

      alert("Equipment deleted successfully!");
    } catch (error) {
      console.error("Delete error:", error);

      alert(
        `Failed to delete equipment: ${error.message}`
      );
    }
  };

  // Cancel editing
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
        key={
          editingEquipment
            ? editingEquipment.id ||
              editingEquipment.equipmentId
            : "new"
        }
        onSubmit={handleSubmit}
        editingEquipment={editingEquipment}
        onCancel={handleCancel}
      />
    </>
  );
}

export default App;