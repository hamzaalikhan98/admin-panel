function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h1>Management Dashboard</h1>
        <p>Welcome back, manage your university records easily.</p>
      </div>

      <div className="admin-box">
        <span className="bell">🔔</span>
        <div className="admin-avatar">A</div>
      </div>
    </header>
  );
}

export default Navbar;