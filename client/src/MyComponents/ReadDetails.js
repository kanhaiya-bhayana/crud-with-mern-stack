import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ReadDetails = (props) => {
  useEffect(() => {
    axios.get("http://localhost:3001/read").then((response) => {
      props.setEmployees(response.data);
    });
  });
  let myStyle = {
    color:"white",
    textDecoration:"none"
  }
  const deleteEmployee = (id)=>{
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) =>{
    })
  }
  
  return (
    <div className="container">
      <h3 className="text-center">Details Section</h3>
      <div className='container'>
        <table className='table table-bordered'>
            <thead className='thead-dark'>
                <tr>
                <th>Name</th>
                <th>Dept.</th>
                <th>Salery</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {props.employees.map((val,key) =>{
            return <tr key={key}>
            <td>{val.name}</td>
            <td>{val.dept}</td>
            <td>{val.salary}</td>
            <td><button className="btn btn-primary p-8"><Link to={`./EditEmp/${val._id}`}style={myStyle}>Edit</Link></button>&nbsp;<button className="btn btn-danger p-8" onClick={() => deleteEmployee(val._id)}>Delete</button></td>
            </tr>
        })}
            </tbody>

        </table>
    </div>
        
    </div>
  );
};






