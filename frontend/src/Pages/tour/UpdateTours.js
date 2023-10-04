import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTours = () => {
  //const [student,setStudent]=useState([])

  const [name, setname] = useState("");
  const [package_type, setpackage_type] = useState("");
  const [visiting_places, setvisiting_places] = useState("");
  const [duration, setduration] = useState("");
  const [vehicle_type, setvehicle_type] = useState("");
  const [maximum_passengers, setmaximum_passengers] = useState("");
  const [package_price, setpackage_price] = useState("");

  const navigate = useNavigate();

  const changeOnClick = (e) => {
    e.preventDefault();

    const Tours = {
      name,
      package_type,
      visiting_places,
      duration,
      vehicle_type,
      maximum_passengers,
      package_price,
    };

    setname("");
    setpackage_type("");
    setvisiting_places("");
    setduration("");
    setvehicle_type("");
    setmaximum_passengers("");
    setpackage_price("");

    axios
      .put(`http://localhost:8070/tour/update/${id}`, Tours)
      .then((res) => {
        console.log(res.data);
        navigate("/viewtour");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8070/tour/get/${id}`)
      .then((res) => [
        setname(res.data.Tour.name),
        setpackage_type(res.data.Tour.package_type),
        setvisiting_places(res.data.Tour.visiting_places),
        setduration(res.data.Tour.duration),
        setvehicle_type(res.data.Tour.vehicle_type),
        setmaximum_passengers(res.data.Tour.maximum_passengers),
        setpackage_price(res.data.Tour.package_price),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Tour Update Page</h1>
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
                  Tour Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  id="name"
                  placeholder="Enter Tour Name"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Package Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={package_type}
                  id="type"
                  placeholder="Enter"
                  onChange={(e) => {
                    setpackage_type(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Visiting Places
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={visiting_places}
                  id="places"
                  placeholder="Enter"
                  onChange={(e) => {
                    setvisiting_places(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Duration
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={duration}
                  id="duration"
                  placeholder="Enter"
                  onChange={(e) => {
                    setduration(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Vehicle Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={vehicle_type}
                  id="vehicle"
                  placeholder="Enter"
                  onChange={(e) => {
                    setvehicle_type(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Maximum Passengers
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={maximum_passengers}
                  id="passengers"
                  placeholder="Enter"
                  onChange={(e) => {
                    setmaximum_passengers(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Package Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={package_price}
                  id="price"
                  placeholder="Enter"
                  onChange={(e) => {
                    setpackage_price(e.target.value);
                  }}></input>
              </div>

              <button type="submit" className="btn btn-primary">
                Update Tour
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <img
            src="../images/Tour Packages.jpg"
            height="620px"
            width="100%"
            className="ml-4"></img>
        </div>
        <div className="col-lg-1 col-0"></div>
      </div>
    </div>
  );
};

export default UpdateTours;
