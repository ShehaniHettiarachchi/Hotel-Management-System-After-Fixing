import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams ,useNavigate} from "react-router-dom"

export default function CustomerProfile() {
  const [customer, setCustomer] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [NIC, setNIC] = useState("");
  const [DOB, setDOB] = useState("");
  const [filename, setFileName] = useState("");

  const navigate=useNavigate();

  const changeOnClick = (e) => {
    e.preventDefault();

    const Customer = {
      name,
      email,
      phone,
      address,
      NIC,
      DOB,
    };

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setNIC("");
    setDOB("");

    axios
    .put(`http://localhost:8070/customer/update/${id}`, Customer)
    .then((res) => {
      console.log(res.data);
     navigate("/cdashboard");
    })
    .catch((err) => {
      console.log(err);
    });


  };
  const id = localStorage.getItem("uID");
  useEffect(() => {
    

    axios
      .get(`http://Localhost:8070/customer/get/${id}`)
      .then((res) => [
        console.log(res.data.customer.name),
        setName(res.data.customer.name),
        setEmail(res.data.customer.email),
        setPhone(res.data.customer.phone_number),
        setAddress(res.data.customer.address),
        setNIC(res.data.customer.NIC),
        setDOB(res.data.customer.DOB),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <br></br>
      <div className="row">
        <div className="col-lg-12 ml-12">
          <h1 className="text-center">My Profile</h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div className="row">
        <div className="col-lg-3 col-2 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={changeOnClick}>
              <div className="form-group">
                <label>Customer Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Customer Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="Contact Number"
                  placeholder="Contact Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Customer Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>NIC</label>
                <input
                  type="text"
                  className="form-control"
                  name="NIC"
                  placeholder="NIC"
                  value={NIC}
                  onChange={(e) => {
                    setNIC(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Date Of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="DOB"
                  placeholder="DOB"
                  value={DOB}
                  onChange={(e) => {
                    setDOB(e.target.value);
                  }}

                />
              </div>

              <br></br>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block text-center mb-2">
                  Edit Details
                </button>
             
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
