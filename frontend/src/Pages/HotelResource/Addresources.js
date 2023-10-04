import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddRes() {
  const [name, setName] = useState("");
  const [rtype, setrtype] = useState("");

  const [Rnumber, setRnumber] = useState("");
  const [Price, setPrice] = useState("");
  const [capacity, setcapacity] = useState("");
  const [Description, setDescription] = useState("");
  const [filename, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    alert("Inserted");

    const formData = new FormData();

    formData.append("name", name);
    formData.append("rtype", rtype);
    formData.append("Rnumber", Rnumber);
    formData.append("Price", Price);
    formData.append("capacity", capacity);
    formData.append("Description", Description);
    formData.append("ResourceImage", filename);

    axios
      .post("http://localhost:8070/resmanger/add", formData)
      .then(() => {
        alert("Resource Added");

        setName("");
        setrtype("");

        setRnumber("");
        setPrice("");
        setcapacity("");
        setDescription("");
        setFileName("");

        navigate("/viewres");
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
          <h1 className="text-center">Resource Insert Page</h1>
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
                  Resource Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Resource name:"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}></input>
              </div>
              {}

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Resource Type{" "}
                </label>
                <br></br>
                <select
                  name="rtype"
                  id="rtype"
                  onChange={(e) => {
                    setrtype(e.target.value);
                  }}>
                  <option value="Select">Select</option>
                  <option value="Pool">Pool</option>
                  <option value="ReceptionHall">ReceptionHall</option>
                  <option value="Ground">Ground</option>
                  <option value="Room">Room</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Resource Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Rnumber"
                  placeholder="Enter Resource Number"
                  onChange={(e) => {
                    setRnumber(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Price"
                  placeholder="Enter Resource Booking Price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  capacity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="capacity"
                  placeholder="Enter capacity"
                  onChange={(e) => {
                    setcapacity(e.target.value);
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

              <div className="form-group">
                <label htmlFor="file">Resource Image</label>
                <input
                  type="file"
                  accept=".png .jpg .jpeg"
                  filename="studentImage"
                  className="form-control-file"
                  onChange={onChangeFile}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block text-center">
                Add Resource
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <img
            src="../images/addres.jpg"
            height="600px"
            width="100%"
            className="ml-4"></img>
        </div>

        <div className="col-lg-1 col-0"></div>
      </div>
    </div>
  );
}
