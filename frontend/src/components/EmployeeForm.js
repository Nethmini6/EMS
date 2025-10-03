import React, { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: ""
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee({ name: "", email: "", position: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
        required
      />
      <input
        name="position"
        placeholder="Position"
        value={employee.position}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
