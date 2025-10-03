import React from "react";
import Employeecard from "./Employeecard";

function EmployeeList({ employees, deleteEmployee }) {
  return (
    <div className="employee-list">
      <h3>Employee List</h3>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        employees.map((emp, index) => (
          <Employeecard
            key={index}
            employee={emp}
            deleteEmployee={deleteEmployee}
            index={index}
          />
        ))
      )}
    </div>
  );
}

export default EmployeeList;
