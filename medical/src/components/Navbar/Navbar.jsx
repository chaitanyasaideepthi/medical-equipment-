import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🏥 <span>Medical Equipment Tracker</span>
      </div>

      <div className="navbar-links">
        <a href="#dashboard">Dashboard</a>
        <a href="#equipment">Equipment</a>

        <button
          className="add-equipment-btn"
          onClick={() => {
            document
              .getElementById("add-equipment")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          + Add Equipment
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
