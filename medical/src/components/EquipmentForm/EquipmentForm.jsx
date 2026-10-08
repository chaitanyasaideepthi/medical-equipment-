import { useState } from "react";
import "./EquipmentForm.css";

function EquipmentForm({ onSubmit }) {
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentId, setEquipmentId] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Available");
  const [maintenanceDate, setMaintenanceDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const equipmentData = {
      equipmentName,
      equipmentId,
      category,
      quantity: Number(quantity),
      location,
      status,
      maintenanceDate,
    };

    onSubmit(equipmentData);

    setEquipmentName("");
    setEquipmentId("");
    setCategory("");
    setQuantity("");
    setLocation("");
    setStatus("Available");
    setMaintenanceDate("");
  };

  return (
    <div className="equipment-form-container">
      <h2>Add Equipment</h2>

      <form className="equipment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Equipment Name</label>
          <input
            type="text"
            value={equipmentName}
            onChange={(e) => setEquipmentName(e.target.value)}
            placeholder="Enter equipment name"
            required
          />
        </div>

        <div className="form-group">
          <label>Equipment ID</label>
          <input
            type="text"
            value={equipmentId}
            onChange={(e) => setEquipmentId(e.target.value)}
            placeholder="EQ-001"
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Diagnostic">Diagnostic</option>
            <option value="Critical Care">Critical Care</option>
            <option value="Laboratory">Laboratory</option>
            <option value="Surgical">Surgical</option>
          </select>
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Available">Available</option>
            <option value="In Use">In Use</option>
            <option value="Under Maintenance">
              Under Maintenance
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Maintenance Date</label>
          <input
            type="date"
            value={maintenanceDate}
            onChange={(e) => setMaintenanceDate(e.target.value)}
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="save-btn">
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
}

export default EquipmentForm;