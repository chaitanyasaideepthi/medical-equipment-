import "./EquipmentList.css";

function EquipmentList({
  equipment,
  onEdit,
  onDelete,
}) {
  return (
    <section className="equipment-section" id="equipment">
      <div className="equipment-header">
        <div>
          <h2>Medical Equipment</h2>
          <p>Manage all hospital equipment</p>
        </div>
      </div>

      {equipment.length === 0 ? (
        <div className="no-equipment">
          <h3>No Equipment Found</h3>
          <p>No medical equipment is available.</p>
        </div>
      ) : (
        <div className="equipment-table-container">
          <table className="equipment-table">
            <thead>
              <tr>
                <th>Equipment Name</th>
                <th>Equipment ID</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Status</th>
                <th>Maintenance Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {equipment.map((item) => (
                <tr key={item.id}>
                  <td>{item.equipmentName}</td>
                  <td>{item.equipmentId}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{item.location}</td>

                  <td>
                    <span
                      className={`status ${item.status
                        ?.toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>{item.maintenanceDate}</td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="edit-btn"
                        onClick={() => onEdit(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => onDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default EquipmentList;