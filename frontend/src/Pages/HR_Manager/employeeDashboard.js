import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EmployeeDashboard = () => {
  const [allEmployee, setAllEmployee] = useState([]);
  const [tempEmployee, setTempEmployee] = useState([]);
  const [empName, setEmpName] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8070/Employee/")
      .then((res) => {
        setAllEmployee(res.data)
      })
      .catch((error) => console.log(error));
  });

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:8070/Employee/delete/${id}`)
      .then((res) => alert("Employee Deleted"));

    setAllEmployee(allEmployee.filter((elem) => elem.id !== id));
  };

  const searchEmployee = () => {
    let count = 0

    tempEmployee.pop()

    if (empName !== "") {
      allEmployee.map((employee) => {
        if (employee.First_Name === empName) {
          tempEmployee.push(employee)
          count++
        }
      })

      if (count > 0) {
        setSearch(true)
        count = 0
      } else {
        setSearch(false)
        alert("No One found Under That Name")
      }
    } else {
      setSearch(false)
      alert("Search field is empty")
    }


  }

  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">Employee Dashboard</h1>
      </div>
      <br></br>



      <Container>
        <Row>
          <Col> <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter Employee's Name"
              aria-label="Enter Employee's Name"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setEmpName(e.target.value);
              }}
            />
            <Button variant="outline-secondary" onClick={searchEmployee} id="button-addon2">
              Search
            </Button>
          </InputGroup></Col>
          <Col xs lg="2"> <Link to="/add" class="btn btn-primary">
            Add New Employee
          </Link></Col>
        </Row>

      </Container>

      <div>
        <Link to="/add" className="btn btn-primary">
          Add New Employee
        </Link>
      </div>


      <br></br>

      {search !== true ? <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <table className="table text-center">
            <thead className="thead-light">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Home Address</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Emergency Contact NUmber</th>
              <th>View Profile</th>
              <th>Details Update</th>
              <th>Details Delete</th>
            </thead>

            {allEmployee.map((setEmployee, key) => (
              <tbody>
                <tr>
                  <td>{setEmployee.First_Name}</td>
                  <td>{setEmployee.Last_Name}</td>
                  <td>{setEmployee.Home_Address}</td>
                  <td>{setEmployee.Email}</td>
                  <td>{setEmployee.Phone_Number}</td>
                  <td>{setEmployee.Emergency_Contact_NUmber}</td>
                  <td>
                    <Link
                      to={`/viewprofile/${setEmployee._id}`}
                      className="btn btn-success">
                      View Profile
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/updateemp/${setEmployee._id}`}
                      className="btn btn-warning">
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteEmployee(setEmployee._id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="col-md-1"></div>
      </div> : <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <table className="table text-center">
            <thead class="thead-light">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Home Address</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Emergency Contact NUmber</th>
              <th>View Profile</th>
              <th>Details Update</th>
              <th>Details Delete</th>
            </thead>

            {tempEmployee.map((setEmployee, key) => (
              <tbody>
                <tr>
                  <td>{setEmployee.First_Name}</td>
                  <td>{setEmployee.Last_Name}</td>
                  <td>{setEmployee.Home_Address}</td>
                  <td>{setEmployee.Email}</td>
                  <td>{setEmployee.Phone_Number}</td>
                  <td>{setEmployee.Emergency_Contact_NUmber}</td>
                  <td>
                    <Link
                      to={`/viewprofile/${setEmployee._id}`}
                      className="btn btn-success">
                      View Profile
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/updateemp/${setEmployee._id}`}
                      className="btn btn-warning">
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteEmployee(setEmployee._id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="col-md-1"></div>
      </div>}
    </div>
  );
};

export default EmployeeDashboard;
