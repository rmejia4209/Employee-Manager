'use client'
import { useState } from "react";



function AddEmployeeForm(){
  const [employeeData, setEmployeeData] = useState({});
  
  const updateEmployeeProp = (event, prop) => {
    event.preventDefault();
    const val = event.target.value
    setEmployeeData({ ...employeeData, [prop]: val})
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const path = `api/add-employee`;

    const res = await fetch(path, {body: JSON.stringify(employeeData), method: "POST"});
    const data = await res.json();
    alert("Done");
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Add Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input 
          type="text"
          className="input input-bordered w-full max-w-xs"
          value={employeeData.firstName ?? ""}
          onChange={(event) => {updateEmployeeProp(event, "firstName")}}
        />
        <br/>
        <label>Last Name: </label>
        <input
          type="text"
          value={employeeData.lastName ?? ""}
          className="input input-bordered w-full max-w-xs"
          onChange={(event) => {updateEmployeeProp(event, "lastName")}}
        />
        <br/>
        <input type="submit" className="btn btn-primary"/>
      </form>
    </div>
  );
}

export default AddEmployeeForm;