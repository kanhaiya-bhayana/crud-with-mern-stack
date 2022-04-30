// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./MyComponents/Header";
import { AddDetails } from "./MyComponents/AddDetails";
import { ReadDetails } from "./MyComponents/ReadDetails";
import { Footer } from "./MyComponents/Footer";

import { useState } from "react";
import { EditEmp } from "./MyComponents/EditEmp";

function App() {
  let myStyle = {
    minHeight: "70vh",
        margin:"50px auto"
  }
  const [employees, setEmployees] = useState([]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="row" style={myStyle}>
                  <div className="col-lg-6">
                    <AddDetails
                      employees={employees}
                      setEmployees={setEmployees}
                    />
                  </div>
                  <div className="col-lg-6">
                    <ReadDetails
                      employees={employees}
                      setEmployees={setEmployees}
                    />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/EditEmp/:id"
            element={
              <EditEmp employees={employees} setEmployees={setEmployees} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
