import { useState } from "react";

function Faculty() {
  const [faculty, setFaculty] = useState([
    {
      id: 1,
      name: "Dr. Ali",
      department: "Software Engineering",
      active: true,
    },
    {
      id: 2,
      name: "Dr. Sara",
      department: "Computer Science",
      active: false,
    },
  ]);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const addFaculty = () => {
    if (!name || !department) {
      alert("Please fill all fields");
      return;
    }

    const newFaculty = {
      id: Date.now(),
      name,
      department,
      active: true,
    };

    setFaculty([...faculty, newFaculty]);
    setName("");
    setDepartment("");
  };

  const deleteFaculty = (id) => {
    setFaculty(faculty.filter((item) => item.id !== id));
  };

  const toggleStatus = (id) => {
    setFaculty(
      faculty.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <div>
      <div className="section-title">
        <h2>Faculty Management</h2>
        <p>Add, view, update status, and delete faculty records.</p>
      </div>

      <div className="form-card">
        <h3>Add New Faculty</h3>

        <div className="form-row">
          <input
            type="text"
            placeholder="Faculty Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <button onClick={addFaculty}>Add Faculty</button>
        </div>
      </div>

      <div className="record-grid">
        {faculty.map((item) => (
          <div className="record-card" key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.department}</p>
            </div>

            <span className={item.active ? "badge active" : "badge inactive"}>
              {item.active ? "Active" : "Inactive"}
            </span>

            <div className="actions">
              <button className="toggle-btn" onClick={() => toggleStatus(item.id)}>
                Change Status
              </button>

              <button className="delete-btn" onClick={() => deleteFaculty(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;