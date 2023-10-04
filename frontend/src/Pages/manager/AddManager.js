import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddManager() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [NIC, setNIC] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDept] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newManager = {
      name,
      userName,
      email,
      phone_number,
      address,
      NIC,
      DOB,
      gender,
      department,
      password,
    };

    axios
      .post("http://localhost:8070/manager/add", newManager)
      .then(() => {
        alert("Manager Added");

        setName(" ");
        setUserName("");
        setEmail("");
        setPhone_number("");
        setAddress("");
        setNIC("");
        setDOB("");
        setGender("");
        setDept("");
        setPassword("");
        navigate("/viewm");
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
          <h1 className="text-center">Manager Insert Page</h1>
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
                  Manager Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Manager Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Uname"
                  placeholder="Enter Manager User Name"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager Email
                </label>
                <input
                  type="Email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Manager Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Phone Number"
                  onChange={(e) => {
                    setPhone_number(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager Address
                </label>
                <input
                  type="textarea"
                  className="form-control"
                  id="address"
                  placeholder="Enter Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager NIC
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="NIC"
                  placeholder="Enter Manager NIC"
                  onChange={(e) => {
                    setNIC(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager Date Of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="DOB"
                  placeholder="Enter Manager Date Of Birth"
                  onChange={(e) => {
                    setDOB(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager Gender
                </label>

                <div className="mb-3">
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  Male
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  Female
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Department
                </label>
                <select
                  name="department"
                  id="department"
                  onChange={(e) => {
                    setDept(e.target.value);
                  }}>
                  <option value="Select">Select</option>
                  <option value="Finance">Finance</option>
                  <option value="HumanResource">Human Resource</option>
                  <option value="Catering">Catering</option>
                  <option value="Tour">Tour</option>
                  <option value="Resource">Resource</option>
                  <option value="Inventory">Inventory</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
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
            src="../images/manager.jpg"
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
