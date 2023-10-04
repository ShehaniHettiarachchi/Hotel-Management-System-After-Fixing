import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
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

  const changeOnclick = (e) => {
    e.preventDefault();

    const newresource = {
      name,
      rtype,

      Rnumber,
      Price,
      capacity,
      Description,
    };
    //console.log(newresource);

    setName("");
    setrtype("");
    setRnumber("");
    setPrice("");
    setcapacity("");
    setDescription("");

    axios
      .put(`http://localhost:8070/resmanger/update/${id}`, newresource)
      .then((res) => {
        console.log(res.data);
        navigate("/viewres");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //alert("Resource Added");
  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8070/resmanger/get/${id}`)
      .then((res) => [
        setName(res.data.Resource.name),
        setrtype(res.data.Resource.rtype),
        setRnumber(res.data.Resource.Rnumber),
        setPrice(res.data.Resource.Price),
        setcapacity(res.data.Resource.capacity),
        setDescription(res.data.Resource.Description),

        console.log(res.data),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Resource Update Page</h1>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={changeOnclick}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Resource Name
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
                  Resource Type{" "}
                </label>
                <br></br>
                <select
                  name="rtype"
                  value={rtype}
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
                  value={Rnumber}
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
                  value={Price}
                  className="form-control"
                  id="Price"
                  placeholder="Enter Resource Number"
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
                  value={capacity}
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
                  value={Description}
                  className="form-control"
                  id="Description"
                  placeholder="Enter Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}></input>
              </div>

              <div className="form-group">
                <label htmlFor="file">Student Image</label>
                <input
                  type="file"
                  accept=".png .jpg .jpeg"
                  filename="studentImage"
                  className="form-control-file"
                  onChange={onChangeFile}
                />
              </div>

              <button type="submit" className="btn btn-primary">
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
