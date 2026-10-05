import "./Dashboard.css";

function Dashboard({ equipment = [] }) {
  const total = equipment.length;

  const available = equipment.filter(
    (item) => item.status === "Available"
  ).length;

  const inUse = equipment.filter(
    (item) => item.status === "In Use"
  ).length;

  const maintenance = equipment.filter(
    (item) => item.status === "Under Maintenance"
  ).length;

  const getPercentage = (value) => {
    if (total === 0) return 0;
    return Math.round((value / total) * 100);
  };

  return (
    <section className="dashboard-section">
      
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Overview of medical equipment across your healthcare facility.
          </p>
        </div>

        <div className="dashboard-date">
          <span>Medical Equipment Management</span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="dashboard-cards">

        {/* Total */}
        <div className="dashboard-card total-card">
          <div className="card-icon">
            🏥
          </div>

          <div className="card-content">
            <p>Total Equipment</p>
            <h2>{total}</h2>
            <span>All registered equipment</span>
          </div>
        </div>

        {/* Available */}
        <div className="dashboard-card available-card">
          <div className="card-icon">
            ✓
          </div>

          <div className="card-content">
            <p>Available</p>
            <h2>{available}</h2>
            <span>
              {getPercentage(available)}% of total equipment
            </span>
          </div>
        </div>

        {/* In Use */}
        <div className="dashboard-card in-use-card">
          <div className="card-icon">
            ↗
          </div>

          <div className="card-content">
            <p>In Use</p>
            <h2>{inUse}</h2>
            <span>
              {getPercentage(inUse)}% of total equipment
            </span>
          </div>
        </div>

        {/* Maintenance */}
        <div className="dashboard-card maintenance-card">
          <div className="card-icon">
            !
          </div>

          <div className="card-content">
            <p>Under Maintenance</p>
            <h2>{maintenance}</h2>
            <span>
              {getPercentage(maintenance)}% of total equipment
            </span>
          </div>
        </div>

      </div>

      {/* Status Overview */}
      <div className="status-overview">

        <div className="overview-header">
          <div>
            <h2>Equipment Status Overview</h2>
            <p>Current equipment availability and usage</p>
          </div>
        </div>

        <div className="status-list">

          {/* Available */}
          <div className="status-row">
            <div className="status-info">
              <span className="status-dot available-dot"></span>
              <span>Available</span>
            </div>

            <div className="status-progress">
              <div className="progress-background">
                <div
                  className="progress-bar available-progress"
                  style={{
                    width: `${getPercentage(available)}%`,
                  }}
                ></div>
              </div>
            </div>

            <strong>{available}</strong>
          </div>

          {/* In Use */}
          <div className="status-row">
            <div className="status-info">
              <span className="status-dot in-use-dot"></span>
              <span>In Use</span>
            </div>

            <div className="status-progress">
              <div className="progress-background">
                <div
                  className="progress-bar in-use-progress"
                  style={{
                    width: `${getPercentage(inUse)}%`,
                  }}
                ></div>
              </div>
            </div>

            <strong>{inUse}</strong>
          </div>

          {/* Maintenance */}
          <div className="status-row">
            <div className="status-info">
              <span className="status-dot maintenance-dot"></span>
              <span>Under Maintenance</span>
            </div>

            <div className="status-progress">
              <div className="progress-background">
                <div
                  className="progress-bar maintenance-progress"
                  style={{
                    width: `${getPercentage(maintenance)}%`,
                  }}
                ></div>
              </div>
            </div>

            <strong>{maintenance}</strong>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Dashboard;





