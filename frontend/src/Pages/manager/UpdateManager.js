import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateManager = () => {
  //const [student,setStudent]=useState([])

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [NIC, setNIC] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDept] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changeOnClick = (e) => {
    e.preventDefault();

    const Managers = {
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

    setName("");
    setUserName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setNIC("");
    setDOB("");
    setGender("");
    setDept("");
    setPassword("");

    axios
      .put(`http://localhost:8070/manager/update/${id}`, Managers)
      .then((res) => {
        console.log(res.data);
        navigate("/viewm");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8070/manager/get/${id}`)
      .then((res) => [
        setName(res.data.manager.name),
        setUserName(res.data.manager.userName),
        setEmail(res.data.manager.email),
        setPhone(res.data.manager.phone_number),
        setAddress(res.data.manager.address),
        setNIC(res.data.manager.NIC),
        setDOB(res.data.manager.DOB),
        setGender(res.data.manager.gender),
        setDept(res.data.manager.department),
        setPassword(res.data.manager.password),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Manager Update Page</h1>
        </div>
      </div>

      <br></br>

      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={changeOnClick}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
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
                  value={userName}
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
                  value={email}
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
                  value={phone_number}
                  id="phone"
                  placeholder="Enter Phone Number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager Address
                </label>
                <input
                  type="textarea"
                  className="form-control"
                  value={address}
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
                  value={NIC}
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
                  value={DOB}
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
                    value={gender}
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
                  value={department}
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
                  value={password}
                  id="password"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}></input>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block text-center">
                Update
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <img
            src="../images/update_Man.jpg"
            height="620px"
            width="100%"
            className="ml-4"></img>
        </div>
        <div className="col-lg-1 col-0"></div>
      </div>
    </div>
  );
};

export default UpdateManager;
