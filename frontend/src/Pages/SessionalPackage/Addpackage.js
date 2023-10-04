import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddRes() {
  const [name, setName] = useState("");
  const [ptype, setptype] = useState("");
  const [Pnumber, setPnumber] = useState("");
  const [TimePeriod, setTime] = useState("");
  const [BookPrice, setBprice] = useState("");
  const [Persons, setperson] = useState("");
  const [Description, setDescription] = useState("");

  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    alert("Inserted");

    const newPackage = {
      name,
      ptype,
      Pnumber,
      TimePeriod,
      BookPrice,
      Persons,
      Description,
    };
    //console.log(newPackage);

    axios
      .post("http://localhost:8070/package/add", newPackage)
      .then(() => {
        alert("Package Added");
        setName("");
        setptype("");

        setPnumber("");
        setTime("");
        setBprice("");
        setperson("");
        setDescription("");

        navigate("/viewpac");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div>
      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Package Insert Page</h1>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={sendData}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Package Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Package name:"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Package Type{" "}
                </label>
                <br></br>
                <select
                  name="ptype"
                  id="ptype"
                  onChange={(e) => {
                    setptype(e.target.value);
                  }}>
                  <option value="Select">Select</option>
                  <option value="Family">Family</option>
                  <option value="Couple">Couple</option>
                  <option value="Childern">Childern</option>
                  <option value="Event">Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Package Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Pnumber"
                  placeholder="Enter Package Number"
                  onChange={(e) => {
                    setPnumber(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Avalable Time Period
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="TimePeriod"
                  placeholder="Enter Package Avalable Time period"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Booking Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="BookPrice"
                  placeholder="Enter Booking Price"
                  onChange={(e) => {
                    setBprice(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Persons
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Persons"
                  placeholder="Enter persons"
                  onChange={(e) => {
                    setperson(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Description"
                  placeholder="Enter Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}></input>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block text-center">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <img
            src="../images/season.jpg"
            height="650px"
            width="100%"
            className="ml-4"></img>
        </div>

        <div className="col-lg-1 col-0"></div>
      </div>
    </div>
  );
}
