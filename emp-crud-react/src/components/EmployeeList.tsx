import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Employee {
  id: number;
  name: string;
  role: string;
}

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [newEmployee, setNewEmployee] = useState<Employee>({ id: 0, name: '', role: '' });

  const handleAdd = () => {
    setEmployees(prevEmployees => [
      ...prevEmployees,
      { ...newEmployee, id: prevEmployees.length + 1 }
    ]);
    setNewEmployee({ id: 0, name: '', role: '' });
  };

  const handleDelete = (id: number) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className="container mt-5" style={{maxWidth: '320px'}}>
      <h1 className="mb-4">Employee List</h1>
      
      <div className="mb-4">
        <h2>Add Employee</h2>
        
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Employee Name"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Job Role"
          value={newEmployee.role}
          onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAdd}>Add</button>
      </div>

      <div className="row">
        {/* Header */}
        <div className="col-md-12 mb-3">
          <div className="row g-3 align-items-center bg-light p-2">
            <div className="col-md-4">
              <strong>Name</strong>
            </div>
            <div className="col-md-4">
              <strong>Role</strong>
            </div>
            <div className="col-md-4 text-end">
              <strong>Action</strong>
            </div>
          </div>
        </div>

        {/* Employee Data Table */}
        {employees.map((employee) => (
          <div key={employee.id} className="col-md-12 mb-3">
            <div className="row g-3 align-items-center">
              <div className="col-md-4">
                {employee.name}
              </div>
              <div className="col-md-4">
                {employee.role}
              </div>
              <div className="col-md-4 text-end">
                <button className="btn btn-danger" onClick={() => handleDelete(employee.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
