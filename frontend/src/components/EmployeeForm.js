import { Grid, Input, Typography, Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";


/*function Employees() {
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

export default Employees;*/


const EmployeeForm = ({ addEmployee, updateEmployee, submitted, data, isEdit }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data && data.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  return (
    <Paper
      elevation={6}
      className="user-form-container"
    >
      <Grid
        container
        spacing={3}
        direction="column" className="user-form-grid"
      >
        {/* Form Title */}
        <Grid item xs={12}>
          <Typography
            variant="h5"
            className="user-form-title"
          >
            {isEdit ? "Edit Employee Details" : "Add New Employee"}
          </Typography>
        </Grid>

        {/* ID Input */}
        <Grid item xs={12} sm={6} className="user-form-field">
          <Typography
            component="label"
            htmlFor="id"
            className="user-form-label"
          >
            ID
          </Typography>
          <Input
            type="number"
            id="id"
            name="id"
            disableUnderline
            className="user-form-input"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Grid>

        {/* Name Input */}
        <Grid item xs={12} sm={6} className="user-form-field" >
          <Typography
            component="label"
            htmlFor="name"
            className="user-form-label"
          >
            Name
          </Typography>
          <Input
            type="text"
            id="name"
            name="name"
            disableUnderline
            className="user-form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>

        {/* Action Button */}
        <Grid item xs={12} className="user-form-button-container">
          <Button
            variant="contained"
            onClick={() =>
              isEdit ? updateEmployee({ id: id, name: name }) : addEmployee({ id: id, name: name })
            }
            className="user-form-button"
          >
            {isEdit ? "Update" : "Add"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};


export default EmployeeForm;