import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const switchAccount = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="logo-box">
        <div className="logo">FU</div>
        <div>
          <h2>Admin Portal</h2>
          <p>University System</p>
        </div>
      </div>

      <nav className="menu">
        <NavLink to="/admin/dashboard" className="menu-link">
          <span>🏠</span> Dashboard
        </NavLink>

        <NavLink to="/admin/faculty" className="menu-link">
          <span>👨‍🏫</span> Faculty
        </NavLink>

        <NavLink to="/admin/supervisors" className="menu-link">
          <span>📋</span> Supervisors
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <p>Logged in as</p>
        <h4>{user?.role}</h4>
        <small>{user?.name}</small>

        <button className="switch-btn" onClick={switchAccount}>
          Switch Account
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;