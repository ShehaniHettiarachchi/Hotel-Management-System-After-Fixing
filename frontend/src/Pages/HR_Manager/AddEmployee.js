import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
  const [First_Name, setFName] = useState("");
  const [Last_Name, setLName] = useState("");
  const [Home_Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone_Number, setNumber] = useState("");
  const [Emergency_Contact_NUmber, setECNumber] = useState("");

  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newEmployee = {
      First_Name,
      Last_Name,
      Home_Address,
      Email,
      Phone_Number,
      Emergency_Contact_NUmber,
    };

    axios
      .post("http://localhost:8070/Employee/add", newEmployee)
      .then(() => {
        alert("Employee Added");

        setFName(" ");
        setLName("");
        setAddress("");
        setEmail("");
        setNumber("");
        setECNumber("");

        navigate("/dashboard");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <br></br>

      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Employee Insert Page</h1>
        </div>
      </div>

      <br></br>

      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={sendData}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="FName"
                  placeholder="Enter Employee First Name"
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="LName"
                  placeholder="Enter Employee Last Name"
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Home Address
                </label>
                <input
                  type="text"
                  className="form-control"
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
                  type="Email"
                  className="form-control"
                  id="Email"
                  placeholder="Enter Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Phone_Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Number"
                  placeholder="Enter Phone Number"
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Emergency Contact NUmber
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="ECNumber"
                  placeholder="Enter Emergency Contact NUmber"
                  onChange={(e) => {
                    setECNumber(e.target.value);
                  }}></input>
              </div>

              <br></br>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block text-center">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <img
            src="../images/Add_Employee_2.jpg"
            height="620px"
            width="100%"
            className="ml-4"></img>
        </div>
        <div className="col-lg-1 col-0"></div>
      </div>
      <br></br>
    </div>
  );
}
