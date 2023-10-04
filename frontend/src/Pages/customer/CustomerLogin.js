import React, { useState } from "react";
//import { dispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CustomerLogin() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8070/customer/login";
      const { data: res } = await axios.post(url, data);
      alert("LogIn successfull");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("uID", res.data.customer._id);
      localStorage.setItem("email", res.data.customer.email);
      localStorage.setItem(
        "permissionLevel",
        res.data.customer.permissionLevel,
      );
      navigate("/cdashboard");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert("Login Failed, Please Check Your Email or Password");
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 ">
          <h1 className="text-center">Customer Login</h1>
        </div>
      </div>
      <br></br>

      <div className="row">
        <div className="col-lg-3 col-0"></div>
        <div className="col-lg-5 col-12 ml-5">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  placeholder="Email Address"
                 
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="Password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  placeholder="Password"
                  
                />
              </div>

              <br></br>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block text-center mb-2">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
