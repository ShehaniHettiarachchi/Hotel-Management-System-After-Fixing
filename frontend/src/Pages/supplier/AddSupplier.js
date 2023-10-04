import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

export default function AddSupplier() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comName, setComName] = useState("");
  const [comAddress, setComAddress] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [supGender, setSupGender] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  

  function sendData(e) {
    e.preventDefault();

    const newSupplier = {
      name,
      email,
      phone,
      comName,
      comAddress,
      materialType,
      supGender,
      password,
    };

    axios
      .post("http://Localhost:8070/suppliers/register", newSupplier)
      .then(() => {
        alert("Supplier Registration successfully");
        

        setName("");
        setEmail("");
        setPhone("");
        setComName("");
        setComAddress("");
        setMaterialType("");
        setSupGender("");
        setPassword("");
        navigate("/sLogin");
      })
      .catch((err) => {
        alert(err);
      });
  };

  

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Supplier Register Page</h1>
        </div>
      </div>

      <br></br>

      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={sendData}>
              <div className="form-group">
                <label> Supplier Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  placeholder="Full Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  pattern="[a-zA-Z ]*"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}


                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required

                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="Number"
                  className="form-control"
                  name="email"
                  placeholder="Phone Number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <div className="form-group">
                <label>Company Name </label>
                <input
                  type="text "
                  className="form-control"
                  name="email"
                  placeholder="Company Name"
                  onChange={(e) => {
                    setComName(e.target.value);
                  }}
                  pattern="[a-zA-Z ]*"
                  required
                />
              </div>

              <div className="form-group">
                <label>Company Address</label>
                <input
                  type="text "
                  className="form-control"
                  name="email"
                  placeholder="Company Address"
                  onChange={(e) => {
                    setComAddress(e.target.value);
                  }}
                  pattern="[a-zA-Z ]*"
                  required
                />
              </div>

              <div className="form-group">
                <label>Material Type</label>
                <input
                  type="text "
                  className="form-control"
                  name="email"
                  placeholder="Material Type"
                  onChange={(e) => {
                    setMaterialType(e.target.value);
                  }}
                  pattern="[a-zA-Z ]*"
                  required
                />
              </div>

              <div className="form-group">
                <label>Supplier Gender</label>
                <br></br>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  onChange={(e) => {
                    setSupGender(e.target.value);
                  }}
                />
                Male
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  onChange={(e) => {
                    setSupGender(e.target.value);
                  }}
                />
                Female
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="Password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>

              <br></br>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block text-center mb-2">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <img
            src="../images/register.jpg"
            height="620px"
            width="100%"
            className="ml-4"></img>
        </div>
        <div className="col-lg-1 col-0"></div>
      </div>
    </div>
  );
}
