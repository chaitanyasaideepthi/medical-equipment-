import "./EquipmentList.css";

function EquipmentList({ equipment, onEdit, onDelete }) {
  return (
    <section className="equipment-list-section">
      <div className="equipment-list-container">

        <h2>Medical Equipment</h2>

        {equipment.length === 0 ? (
          <p className="no-equipment">
            No equipment available
          </p>
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
                  <tr key={item.id || item.equipmentId}>

                    <td>{item.equipmentName}</td>

                    <td>{item.equipmentId}</td>

                    <td>{item.category}</td>

                    <td>{item.quantity}</td>

                    <td>{item.location}</td>

                    <td>{item.status}</td>

                    <td>{item.maintenanceDate}</td>

                    <td className="action-buttons">

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

                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

      </div>
    </section>
  );
}

export default EquipmentList;