import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {Link} from "axios";

export default function AddBooking() {
  const [cusName, setCName] = useState("");
  const [cusEmail, setCEmail] = useState("");
  const [resName, setResName] = useState("");
  const [resPrice,setResPrice]=useState("");
  const [bDate, setBDate] = useState("");
 

  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newBooking = {
      cusName,
      cusEmail,
      resName,
      resPrice,
      bDate,
    };

    axios
      .post("http://localhost:8070/booking/add", newBooking)
      .then(() => {
        alert("Booking Added");

        setCName(" ");
        setCEmail("");
        setResName("");
        setResPrice("");
        setBDate("");

        navigate("/cdashboard");
      })
      .catch((err) => {
        alert(err);
      });
  }

  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8070/resmanger/get/${id}`)
      .then((res) => 
      [setResName(res.data.Resource.name),
        setResPrice(res.data.Resource.Price)
      ])
      
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <br></br>

      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Booking Details Page</h1>
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
                  Customer Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter customer Name"
                  onChange={(e) => {
                    setCName(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Customer Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Uname"
                  placeholder="Enter customer Email"
                  onChange={(e) => {
                    setCEmail(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Resource Name
                </label>
                <input
                  type="text"
                  readOnly="true"
                  value={resName}
                  className="form-control"
                  id="email"
                  placeholder="Enter Resource Name"
                  onChange={(e) => {
                    setResName(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Resource Price
                </label>
                <input
                  type="number"
                  readOnly="true"
                  value={resPrice}
                  className="form-control"
                  id="price"
                  placeholder="Enter Resource Price"
                  onChange={(e) => {
                    setResPrice(e.target.value);
                  }}></input>
              </div>


              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Booking Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="bDate"
                  placeholder="Enter Booking Date"
                  onChange={(e) => {
                    setBDate(e.target.value);
                  }}></input>

                  <div>

                  <br></br>
            <div class="mb-3">

              <h3>Payment details</h3>
              <br></br>

              <div class="form-outline mb-3">
                <input type="text" id="formControlLgXM8" class="form-control"
                  placeholder="1234 5678 1234 5678" />
                <label class="form-label" for="formControlLgXM8">Card Number</label>
              </div>

              <div class="row mb-3">
                <div class="col-6">
                  <div class="form-outline">
                    <input type="password" id="formControlLgExpk8" class="form-control"
                      placeholder="MM/YYYY" />
                    <label class="form-label" for="formControlLgExpk8">Expire</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-outline">
                    <input type="password" id="formControlLgcvv8" class="form-control" placeholder="Cvv" />
                    <label class="form-label" for="formControlLgcvv8">Cvv</label>
                  </div>
                </div>
              </div>

             
            </div>
          

                  </div>



                  
              </div>

              <br></br>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block text-center">
                Place Booking
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
