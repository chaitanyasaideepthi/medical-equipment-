import { useState } from "react";
import "./EquipmentForm.css";

function EquipmentForm({ onSubmit, editingEquipment, onCancel }) {
  const [formData, setFormData] = useState({
    equipmentName: editingEquipment?.equipmentName || "",
    equipmentId: editingEquipment?.equipmentId || "",
    category: editingEquipment?.category || "",
    quantity: editingEquipment?.quantity || "",
    location: editingEquipment?.location || "",
    status: editingEquipment?.status || "Available",
    maintenanceDate: editingEquipment?.maintenanceDate || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      equipmentName: "",
      equipmentId: "",
      category: "",
      quantity: "",
      location: "",
      status: "Available",
      maintenanceDate: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.equipmentName ||
      !formData.equipmentId ||
      !formData.category ||
      !formData.quantity ||
      !formData.location ||
      !formData.maintenanceDate
    ) {
      alert("Please fill all fields.");
      return;
    }

    const equipmentData = {
      equipmentName: formData.equipmentName,
      equipmentId: formData.equipmentId,
      category: formData.category,
      quantity: Number(formData.quantity),
      location: formData.location,
      status: formData.status,
      maintenanceDate: formData.maintenanceDate,
    };

    try {
      await onSubmit(equipmentData);

      resetForm();
    } catch (error) {
      console.error("Form submit error:", error);
    }
  };

  const handleCancel = () => {
    resetForm();

    if (onCancel) {
      onCancel();
    }
  };

  return (
    <section className="equipment-form-section" id="add-equipment">
      <div className="equipment-form-container">

        <h2>
          {editingEquipment
            ? "Edit Medical Equipment"
            : "Add Medical Equipment"}
        </h2>

        <p className="form-description">
          {editingEquipment
            ? "Update the equipment details below."
            : "Enter the details of the new medical equipment."}
        </p>

        <form className="equipment-form" onSubmit={handleSubmit}>

          {/* Equipment Name */}
          <div className="form-group">
            <label>Equipment Name</label>

            <input
              type="text"
              name="equipmentName"
              value={formData.equipmentName}
              onChange={handleChange}
              placeholder="Example: ECG Machine"
            />
          </div>

          {/* Equipment ID */}
          <div className="form-group">
            <label>Equipment ID</label>

            <input
              type="text"
              name="equipmentId"
              value={formData.equipmentId}
              onChange={handleChange}
              placeholder="Example: EQ-001"
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Diagnostic">Diagnostic</option>
              <option value="Critical Care">Critical Care</option>
              <option value="Surgical">Surgical</option>
              <option value="Monitoring">Monitoring</option>
              <option value="Laboratory">Laboratory</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="form-group">
            <label>Quantity</label>

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Example: 2"
              min="1"
            />
          </div>

          {/* Location */}
          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Example: Cardiology Department"
            />
          </div>

          {/* Status */}
          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="In Use">In Use</option>
              <option value="Under Maintenance">
                Under Maintenance
              </option>
            </select>
          </div>

          {/* Maintenance Date */}
          <div className="form-group">
            <label>Maintenance Date</label>

            <input
              type="date"
              name="maintenanceDate"
              value={formData.maintenanceDate}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="form-buttons">

            {editingEquipment && (
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              className="submit-btn"
            >
              {editingEquipment
                ? "Update Equipment"
                : "Add Equipment"}
            </button>

          </div>

        </form>
      </div>
    </section>
  );
}

export default EquipmentForm;