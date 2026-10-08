import "./EquipmentList.css";

function EquipmentList({ equipment, onEdit, onDelete }) {
  return (
    <div className="equipment-list">
      <h2>Equipment List</h2>

      {equipment.length === 0 ? (
        <p>No equipment available</p>
      ) : (
        <div className="table-container">
          <table>
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
                  <td>{item.status}</td>
                  <td>{item.maintenanceDate}</td>

                  <td>
                    <div className="action-buttons">
                      <button
                        type="button"
                        className="edit-btn"
                        onClick={() => onEdit(item)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
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
    </div>
  );
}

export default EquipmentList;