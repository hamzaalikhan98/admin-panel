import { useAuth } from "../context/AuthContext";

function SupervisorDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="role-dashboard supervisor-bg">
      <div className="role-header">
        <div>
          <h1>Supervisor Dashboard</h1>
          <p>Welcome back, {user?.name}</p>
        </div>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="role-cards">
        <div className="role-card">
          <h3>👥 Assigned Students</h3>
          <p>View students assigned under your supervision.</p>
        </div>

        <div className="role-card">
          <h3>📁 Project Requests</h3>
          <p>Review student project proposals and requests.</p>
        </div>

        <div className="role-card">
          <h3>📝 Feedback</h3>
          <p>Provide feedback and guidance to students.</p>
        </div>
      </div>

      <div className="info-panel">
        <h2>Supervisor Information</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>
    </div>
  );
}

export default SupervisorDashboard;