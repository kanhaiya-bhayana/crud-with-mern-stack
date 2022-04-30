import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const EditEmp = (props) => {
  let { id } = useParams();
  let linkStyle = {
    color:"white",
    textDecoration:"none"
  }

  let myStyle = {
    minHeight: "70vh",
        margin:"50px auto"
  }

  const [oldrecord, setoldRecord] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/editemp/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setoldRecord(result);
      });
  }, [id]);

  const [name, setName] = useState(oldrecord.name);
  const [dept, setDept] = useState(oldrecord.dept);
  const [salary, setSalary] = useState(oldrecord.salary);

  const editEmployee = (id) => {
    axios
      .post(`http://localhost:3001/${id}`, {
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
    <div className="container text-center" style={myStyle}>
      <form>
        <h3> Update Section</h3>
        <h5 className="my-3"> Update Your Details</h5>
          <div>
            <label className="form-label">Name</label>
            <input className="form-control"
              type="text"
              defaultValue={oldrecord.name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label className="form-label">Dept</label>
            <input className="form-control"
              type="text"
              defaultValue={oldrecord.dept}
              onChange={(e) => setDept(e.target.value)}
            />
            <br />
            <label className="form-label">Salary</label>
            <input className="form-control"
              type="text"
              defaultValue={oldrecord.salary}
              // value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <br />

            <button className="btn btn-primary p-8" onClick={() => editEmployee(id)}>
              <Link style={linkStyle} to={`/`}>Update</Link>
            </button>
          </div>
      </form>
    </div>
  );
};
