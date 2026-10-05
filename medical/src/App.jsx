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

import "./App.css";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editingEquipment, setEditingEquipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load equipment
  const loadEquipment = async () => {
    try {
      setLoading(true);

      const data = await getEquipment();

      console.log("Equipment data:", data);

      setEquipment(data);
      setError("");
    } catch (err) {
      console.error("Error loading equipment:", err);
      setError("Failed to load equipment.");
    } finally {
      setLoading(false);
    }
  };

  // Load equipment when app starts
  useEffect(() => {
    loadEquipment();
  }, []);

  // Add equipment
  const handleAddEquipment = async (data) => {
    try {
      await createEquipment(data);

      await loadEquipment();

      alert("Equipment added successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add equipment.");
    }
  };

  // Edit equipment
  const handleEdit = (item) => {
    setEditingEquipment(item);

    document
      .getElementById("add-equipment")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  // Update equipment
  const handleUpdateEquipment = async (data) => {
    try {
      await updateEquipment(
        editingEquipment.id,
        data
      );

      setEditingEquipment(null);

      await loadEquipment();

      alert("Equipment updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update equipment.");
    }
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

      await loadEquipment();

      alert("Equipment deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete equipment.");
    }
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingEquipment(null);
  };

  return (
    <div className="app">

      {/* Navbar */}
      <Navbar />

      <main>

        {/* Dashboard */}
        <section id="dashboard">
          <Dashboard equipment={equipment} />
        </section>

        {/* Equipment List */}
        <section id="equipment">

          {loading ? (
            <div className="loading">
              Loading equipment...
            </div>
          ) : error ? (
            <div className="error">
              {error}
            </div>
          ) : (
            <EquipmentList
              equipment={equipment}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}

        </section>

        {/* Add / Edit Equipment */}
        <section id="add-equipment">
          <EquipmentForm
            onSubmit={
              editingEquipment
                ? handleUpdateEquipment
                : handleAddEquipment
            }
            editingEquipment={editingEquipment}
            onCancel={handleCancelEdit}
          />
        </section>

      </main>

    </div>
  );
}

export default App;
