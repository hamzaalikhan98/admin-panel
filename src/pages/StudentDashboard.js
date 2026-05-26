import { useAuth } from "../context/AuthContext";

function StudentDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="role-dashboard student-bg">
      <div className="role-header">
        <div>
          <h1>Student Dashboard</h1>
          <p>Welcome back, {user?.name}</p>
        </div>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="role-cards">
        <div className="role-card">
          <h3>📚 My Project</h3>
          <p>View your final year project details and progress.</p>
        </div>

        <div className="role-card">
          <h3>👨‍🏫 Supervisor</h3>
          <p>Check assigned supervisor information.</p>
        </div>

        <div className="role-card">
          <h3>✅ Status</h3>
          <p>Track approval and submission status.</p>
        </div>
      </div>

      <div className="info-panel">
        <h2>Student Information</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>
    </div>
  );
}

export default StudentDashboard;