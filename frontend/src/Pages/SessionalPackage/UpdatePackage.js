import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [ptype, setptype] = useState("");
  const [Pnumber, setPnumber] = useState("");
  const [TimePeriod, setTime] = useState("");
  const [BookPrice, setBprice] = useState("");
  const [Persons, setperson] = useState("");
  const [Description, setDescription] = useState("");

  const navigate = useNavigate();

  const changeOnclick = (e) => {
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

    setName("");
    setptype("");

    setPnumber("");
    setTime("");
    setBprice("");
    setperson("");
    setDescription("");

    axios
      .put(`http://localhost:8070/package/update/${id}`, newPackage)

      .then((res) => {
        console.log(res.data);
        navigate("/viewpac");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8070/package/get/${id}`)
      .then((res) => [
        setName(res.data.Package.name),
        setptype(res.data.Package.ptype),
        setPnumber(res.data.Package.Pnumber),
        setTime(res.data.Package.TimePeriod),
        setBprice(res.data.Package.BookPrice),
        setperson(res.data.Package.Persons),
        setDescription(res.data.Package.Description),

        console.log(res.data),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Package Update Page</h1>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={changeOnclick}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Package Name
                </label>
                <input
                  type="text"
                  value={name}
                  className="form-control"
                  id="name"
                  placeholder="Enter Resource name:"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Package Type
                </label>
                <br></br>
                <select
                  name="ptype"
                  value={ptype}
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
                  value={Pnumber}
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
                  value={TimePeriod}
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
                  value={BookPrice}
                  className="form-control"
                  id="BookPrice"
                  placeholder="Enter capacity"
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
                  value={Persons}
                  className="form-control"
                  id="Persons"
                  placeholder="Enter Price"
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
                  value={Description}
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
            src="../images/addres.jpg"
            height="500px"
            width="100%"
            className="ml-4"></img>
        </div>

        <div className="col-lg-1 col-0"></div>
      </div>
    </div>
  );
};

export default Update;
