import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import Dashboard from "./Dashboard";
import Faculty from "./Faculty";
import Supervisors from "./Supervisors";

function AdminDashboard() {
  const { logout } = useAuth();

  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <div className="page-content">
          <button className="delete-btn" onClick={logout}>
            Logout
          </button>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="supervisors" element={<Supervisors />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;