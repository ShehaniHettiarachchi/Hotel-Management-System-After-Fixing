import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AddPackage() {
  const [validated, setValidated] = useState(false);

  const [name, setname] = useState("");
  const [package_type, setPackageType] = useState("");
  const [visiting_places, setVisitingPlaces] = useState("");
  const [duration, setDuration] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [maximum_passengers, setMaximumPassengers] = useState("");
  const [package_price, setPackagePrice] = useState("");
  const navigate = useNavigate();

  // const [AllCategory, setAllCategory] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8090/api/food").then((res) => {
  //     if (res.data.success) {
  //       setAllCategory(res.data.existingCategory);
  //     }
  //   });
  // });

  function savePackage(e) {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();

      e.stopPropagation();
    } else {
      e.preventDefault();

      const newPackage = {
        name,
        package_type,
        visiting_places,
        duration,
        vehicle_type,
        maximum_passengers,
        package_price,
      };

      axios
        .post("http://localhost:8070/tour/add", newPackage)
        .then(() => {
          alert("New Package Added");
          navigate("/viewtour");
          // window.location.replace("/addtour");
        })
        .catch((err) => {
          alert(err);
        });
    }
    setValidated(true);
  }

  return (
    <div className="row">
      <div className="col-lg-2"></div>

      <div className="col-lg-8">
        <div className="container1">
          <div className="col-md-8 mt-4 mx-auto border mt-5 ml-0 mr-3 bg-light shadow ">
            <br></br>
            <h2 className="h3 mb-3 font-weight-normal text-center">
              Add New Tour Package
            </h2>
            <div className="additm">
              <Form noValidate validated={validated} onSubmit={savePackage}>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    {" "}
                    Package Name{" "}
                  </label>
                  <input
                    type="text"
                    required
                    minLength="2"
                    className="form-control"
                    placeholder="Enter Item Name"
                    id="ItemName"
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide package name
                  </Form.Control.Feedback>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    {" "}
                    Package Type{" "}
                  </label>
                  <input
                    type="text"
                    required
                    minLength="2"
                    className="form-control"
                    placeholder="Enter Package type"
                    id="BrandName"
                    onChange={(e) => {
                      setPackageType(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a package type
                  </Form.Control.Feedback>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    {" "}
                    Visiting Places{" "}
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Visiting Place"
                    id="QualityAssurance"
                    onChange={(e) => {
                      setVisitingPlaces(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a visiting place
                  </Form.Control.Feedback>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    {" "}
                    Duration{" "}
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Duration"
                    id="QualityAssurance"
                    onChange={(e) => {
                      setDuration(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a duration
                  </Form.Control.Feedback>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    {" "}
                    Vehicle Type{" "}
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Vehicle Type"
                    id="QualityAssurance"
                    onChange={(e) => {
                      setVehicleType(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a vehicle type
                  </Form.Control.Feedback>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    {" "}
                    Maximum Passengers{" "}
                  </label>
                  <input
                    type="number"
                    required
                    className="form-control"
                    placeholder="Enter Value"
                    id="QualityAssurance"
                    onChange={(e) => {
                      setMaximumPassengers(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a value
                  </Form.Control.Feedback>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    {" "}
                    Package Price{" "}
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Package Price"
                    id="QualityAssurance"
                    onChange={(e) => {
                      setPackagePrice(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide package price
                  </Form.Control.Feedback>
                </div>

                <Button
                  type="submit"
                  className="btn btn-success btn-lg btn-block text-center mb-3"
                  style={{ marginTop: "15px" }}>
                  <i className="far fa-check-square"></i>
                  &nbsp; Save
                </Button>
              </Form>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </div> //row
  );
}
