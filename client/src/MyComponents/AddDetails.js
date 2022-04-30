import React from "react";
import { useState } from "react";
import axios from "axios";

export const AddDetails = (props) => {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [salary, setSalary] = useState("");

  const inserted = () => {
    axios
      .post("http://localhost:3001/insert", {
        name: name,
        dept: dept,
        salary: salary,
      })
      .then((response) => {
        props.setEmployees([...props.employees, response.data]);
      });
    setName("");
    setDept("");
    setSalary("");
  };


  return (
    <div className="container">
      <h3 className="text-center">Insert Section</h3>
      <label className="form-label">Name</label>
      <input className="form-control"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label className="form-label">Dept</label>
      <input className="form-control"
        type="text"
        value={dept}
        onChange={(e) => setDept(e.target.value)}
      />
      <br />
      <label className="form-label">Salary</label>
      <input className="form-control"
        type="text"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <br />
      <button className="btn btn-primary p-8" type="submit" onClick={inserted}>
        Submit
      </button>
     
    </div>
  );
};
