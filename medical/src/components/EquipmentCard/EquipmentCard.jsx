import "./EquipmentCard.css";

function EquipmentCard({ equipment, onEdit, onDelete }) {
  return (
    <div className="equipment-card">
      
      {/* Card Header */}
      <div className="equipment-card-header">
        <div>
          <h3>{equipment.equipmentName}</h3>
          <p className="equipment-id">
            ID: {equipment.equipmentId}
          </p>
        </div>

        <span
          className={`card-status ${equipment.status
            ?.toLowerCase()
            .replaceAll(" ", "-")}`}
        >
          {equipment.status}
        </span>
      </div>

      {/* Equipment Details */}
      <div className="equipment-details">

        <div className="equipment-detail">
          <span className="detail-label">
            Category
          </span>
          <span className="detail-value">
            {equipment.category}
          </span>
        </div>

        <div className="equipment-detail">
          <span className="detail-label">
            Quantity
          </span>
          <span className="detail-value">
            {equipment.quantity}
          </span>
        </div>

        <div className="equipment-detail">
          <span className="detail-label">
            Location
          </span>
          <span className="detail-value">
            {equipment.location}
          </span>
        </div>

        <div className="equipment-detail">
          <span className="detail-label">
            Maintenance
          </span>
          <span className="detail-value">
            {equipment.maintenanceDate}
          </span>
        </div>

      </div>

      {/* Buttons */}
      <div className="card-actions">

        <button
          className="card-edit-btn"
          onClick={() => onEdit(equipment)}
        >
          Edit
        </button>

        <button
          className="card-delete-btn"
          onClick={() => onDelete(equipment.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default EquipmentCard;