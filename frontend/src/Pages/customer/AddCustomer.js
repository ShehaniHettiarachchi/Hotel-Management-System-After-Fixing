import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [NIC, setNIC] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [filename, setFileName] = useState("");

  // Validation Functions
  const validateName = (name) => /^[a-zA-Z\s]{1,20}$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phone) => /^\d{10}$/.test(phone);
  const validateAddress = (address) => address.length > 0;
  const validateNIC = (nic) => /^[0-9]{9}[VvXx]?$/.test(nic);
  const validateDOB = (dob) => dob !== "";
  const validateGender = (gender) => gender === "Male" || gender === "Female";
  const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  const navigate = useNavigate();

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  function sendData(e) {
    e.preventDefault();

    // Validate inputs
    if (!validateName(name) || !validateEmail(email) || !validatePhoneNumber(phone_number) || !validateAddress(address) || !validateNIC(NIC) || !validateDOB(DOB) || !validateGender(gender) || !validatePassword(password)) {
      alert("Please check your input fields.");
      return;
    }
    
    alert("Profile Image Changed");

    const formData = new FormData();

    formData.append("customerImage", filename);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone_number", phone_number);
    formData.append("address", address);
    formData.append("NIC", NIC);
    formData.append("DOB", DOB);
    formData.append("gender", gender);
    formData.append("password", password);

    const newCustomer = {
      name,
      email,
      phone_number,
      address,
      NIC,
      DOB,
      gender,
      password,
    };

    axios
      .post("http://localhost:8070/customer/add", formData)
      .then(() => {
        alert("Customer Added");

        setFileName(" ");
        setName(" ");
        setEmail("");
        setPhone_number("");
        setAddress("");
        setNIC("");
        setDOB("");
        setGender("");
        setPassword("");

      navigate("")

      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div className="row">
        <div className="col-lg-5 ml-0">
          <br></br>
          <h1 className="text-center">Customer Resgister</h1>
        </div>
      </div>

      <br></br>
      <div className="row">
        <div className="col-lg-5 ml-0">
          <div className="border ml-3 mr-3 bg-light shadow">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={sendData}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Customer Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Student Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}></input>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Student Email
                </label>
                <input
                  type="Email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Customer Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}></input>
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Customer Phone Number
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

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Customer Address
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

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Customer NIC
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="NIC"
                  placeholder="Enter Customer NIC"
                  onChange={(e) => {
                    setNIC(e.target.value);
                  }}></input>
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Customer Date Of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="DOB"
                  placeholder="Enter Student Date Of Birth"
                  onChange={(e) => {
                    setDOB(e.target.value);
                  }}></input>
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Student Gender
                </label>

                <div className="form-group">
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
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Student Name"
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
              <br></br>
            </form>
          </div>
        </div>

        <div className="col-lg-7 col-12">
          <img
            src="../images/customer_register.jpg" height="740px" width="100%"
            className="ml-0"></img>
        </div>
        <div className="col-lg-0 col-0"></div>
      </div>

      <br></br>
    </div>
  );
}
