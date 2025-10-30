import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import { useEffect, useState } from "react";
import Axios from "axios";


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

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
       getEmployees(); 
  }, []);


  const getEmployees = () => {
        Axios.get("http://localhost:3001/api/employees")
            .then(response => {
                setEmployees(response?.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
  }

  const addEmployee = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        Axios.post("http://localhost:3001/api/createemployee", payload)
            .then(() => {
                getEmployees();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
  }

  const updateEmployee = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        Axios.post("http://localhost:3001/api/updateemployee", payload)
            .then(() => {
                getEmployees();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });

      
  }
    
  const deleteEmployee = (data) => {

        Axios.post("http://localhost:3001/api/deleteemployee", data)
            .then(() => {
                getEmployees();
                
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
  }

  return (
      <div>
        <EmployeeForm 
                addEmployee={addEmployee}
                updateEmployee={updateEmployee}
                submitted={submitted}
                data={selectedEmployee}
                isEdit={isEdit}
        />
        <EmployeeList
                rows={employees} 
                selectedEmployee={data => {
                    setSelectedEmployee(data);
                    setIsEdit(true);
                }}
                deleteEmployee={data => window.confirm("Are you sure?") && deleteEmployee(data) }

      
        />
      </div>
  );

};
export default Employees;