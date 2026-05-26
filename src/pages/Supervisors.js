import { useState, useEffect } from "react";
import asad from "../images/asad.jpg";
import abrar from "../images/abrar.jpg";

function Supervisors() {
  const [supervisors, setSupervisors] = useState(() => {
    const savedSupervisors = localStorage.getItem("supervisors");

    return savedSupervisors
      ? JSON.parse(savedSupervisors)
      : [
          {
            id: 1,
            name: "Sir Asad",
            email: "asad@fui.edu.pk",
            phone: "03001234567",
            designation: "Lecturer",
            field: "Information Technology",
            image: asad,
          },
          {
            id: 2,
            name: "Sir Abrar",
            email: "abrar@fui.edu.pk",
            phone: "03111234567",
            designation: "Lecturer",
            field: "Artificial Intelligence",
            image: abrar,
          },
        ];
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    field: "",
    image: "",
  });

  useEffect(() => {
    localStorage.setItem("supervisors", JSON.stringify(supervisors));
  }, [supervisors]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addSupervisor = () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.designation ||
      !form.field ||
      !form.image
    ) {
      alert("Please fill all fields including image URL");
      return;
    }

    const newSupervisor = {
      id: Date.now(),
      ...form,
      image: form.image,
    };

    setSupervisors([...supervisors, newSupervisor]);

    setForm({
      name: "",
      email: "",
      phone: "",
      designation: "",
      field: "",
      image: "",
    });
  };

  const deleteSupervisor = (id) => {
    setSupervisors(supervisors.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="section-title">
        <h2>Supervisor Records</h2>
        <p>Add and manage supervisor information in a professional layout.</p>
      </div>

      <div className="form-card">
        <h3>Add New Supervisor</h3>

        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Supervisor Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={form.designation}
            onChange={handleChange}
          />

          <input
            type="text"
            name="field"
            placeholder="Field of Specialization"
            value={form.field}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Paste Image URL"
            value={form.image}
            onChange={handleChange}
          />

          <button onClick={addSupervisor}>Add Supervisor</button>
        </div>
      </div>

      <div className="record-grid">
        {supervisors.map((item) => (
          <div className="record-card supervisor-card" key={item.id}>
            <img src={item.image} alt={item.name} className="supervisor-img" />

            <h3>{item.name}</h3>
            <p className="designation">{item.designation}</p>

            <p>
              <strong>Email:</strong> {item.email}
            </p>

            <p>
              <strong>Phone:</strong> {item.phone}
            </p>

            <p>
              <strong>Field:</strong> {item.field}
            </p>

            <button
              className="delete-btn"
              onClick={() => deleteSupervisor(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Supervisors;