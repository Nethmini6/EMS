
/*import Employeecard from "./Employeecard";

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

export default EmployeeList;*/


import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


const EmployeeList = ({rows, selectedEmployee, deleteEmployee}) => {
    return (

    <TableContainer component={Paper} className="user-table-container">
        <Table>
            <TableHead className="user-table-head">
                <TableRow>
                    <TableCell className="user-table-header-cell">ID</TableCell>
                    <TableCell className="user-table-header-cell">Name</TableCell>
                    <TableCell className="user-table-header-cell">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.id} className="user-table-row" hover>
                            <TableCell className="user-table-cell">{row.id}</TableCell>
                            <TableCell className="user-table-cell">{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    className="update-btn"
                                    variant="contained"
                                    onClick={() => selectedEmployee({id: row.id, name: row.name})}
                                >
                                    Update
                                </Button>
                                <Button
                                    className="delete-btn"
                                    variant="contained"
                                    onClick={() => deleteEmployee({id: row.id})}
                                >
                                    Delete
                                </Button>

                            </TableCell>
                        </TableRow>
                    )) : (
                        <TableRow>
                            <TableCell colSpan={3} className="no-data" >No Data</TableCell>
                        </TableRow>
                    )
                } 
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default EmployeeList;
