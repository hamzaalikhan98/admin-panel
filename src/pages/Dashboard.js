function Dashboard() {
  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card blue">
          <p>Total Departments</p>
          <h2>06</h2>
          <span>Active academic units</span>
        </div>

        <div className="stat-card purple">
          <p>Total Faculty</p>
          <h2>30</h2>
          <span>Registered faculty members</span>
        </div>

        <div className="stat-card green">
          <p>Supervisors</p>
          <h2>12</h2>
          <span>Available supervisors</span>
        </div>
      </div>

      <div className="welcome-card">
        <h2>University Admin Panel</h2>
        <p>
          This admin panel is designed to manage faculty and supervisor records
          with a clean, simple, and professional interface.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;