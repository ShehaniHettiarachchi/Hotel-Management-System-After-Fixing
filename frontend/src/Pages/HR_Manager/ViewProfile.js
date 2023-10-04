import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewProfile = () => {
  //const [student,setStudent]=useState([])

  const [First_Name, setFName] = useState("");
  const [Last_Name, setLName] = useState("");
  const [Home_Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone_Number, setNumber] = useState("");
  const [Emergency_Contact_NUmber, setECNumber] = useState("");

  const navigate = useNavigate();

  const changeOnClick = (e) => {
    e.preventDefault();

    const Employee = {
      First_Name,
      Last_Name,
      Home_Address,
      Email,
      Phone_Number,
      Emergency_Contact_NUmber,
    };

    setFName("");
    setLName("");
    setAddress("");
    setEmail("");
    setNumber("");
    setECNumber("");

  
  };
  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8070/Employee/get/${id}`)
      .then((res) => [
        setFName(res.data.Employee.First_Name),
        setLName(res.data.Employee.Last_Name),
        setAddress(res.data.Employee.Home_Address),
        setEmail(res.data.Employee.Email),
        setNumber(res.data.Employee.Phone_Number),
        setECNumber(res.data.Employee.Emergency_Contact_NUmber),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div class="row">
        <div class="col-lg-4 ml-5">
          <h1 class="text-center">Employee Details Page</h1>
        </div>
      </div>

      <br></br>

      <div class="row">
        <div class="col-lg-0 col-0 ml-5"></div>

        <div class="col-lg-5 col-12">
          <div class="border ml-3 mr-3 bg-light shadow  ">
            <form class="mt-3 ml-3 mr-3 mb-3" onSubmit={changeOnClick}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Employee First Name
                </label>
                <input
                readOnly="true"
                  type="text"
                  className="form-control"
                  value={First_Name}
                  id="FName"
                  placeholder="Enter Employee First Name"
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Employee Last Name
                </label>
                <input
                readOnly="true"
                  type="text"
                  className="form-control"
                  value={Last_Name}
                  id="Lname"
                  placeholder="Enter Employee Last Name"
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Employee Home Address
                </label>
                <input
                readOnly="true"
                  type="text"
                  className="form-control"
                  value={Home_Address}
                  id="Address"
                  placeholder="Enter Home Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Employee Email
                </label>
                <input
                readOnly="true"
                  type="email"
                  className="form-control"
                  value={Email}
                  id="Email"
                  placeholder="Enter Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Employee Phone Number
                </label>
                <input
                readOnly="true"
                  type="number"
                  className="form-control"
                  value={Phone_Number}
                  id="Number"
                  placeholder="Enter Employee Phone Number"
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager Emergency Contact Number
                </label>
                <input
                readOnly="true"
                  type="number"
                  className="form-control"
                  value={Emergency_Contact_NUmber}
                  id="ECNumber"
                  placeholder="Enter Employee Emergency Contact Number"
                  onChange={(e) => {
                    setECNumber(e.target.value);
                  }}></input>
              </div>

             
                <Link
                    to="/dashboard"
                  a className="btn btn-primary btn-lg btn-block text-center">

                  Back To DashBoard
                    
                </Link>
             
            </form>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <img
            src="../images/View_Profile.webp"
            height="620px"
            width="100%"
            class="ml-4"></img>
        </div>
        <div class="col-lg-1 col-0"></div>
      </div>
    </div>
  );
};

export default ViewProfile;