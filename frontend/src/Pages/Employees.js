import React, { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

function Employees() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (index) => {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
  };

  return (
    <div className="employees-page">
      <h2>Employee Management</h2>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
    </div>
  );
}

export default Employees;
