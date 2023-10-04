import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewMaterial() {
  const [allMaterial, setAllMaterial] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/material/")
      .then((res) => setAllMaterial(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="container">
      <center>
        <br></br>
        <h1>Material</h1>
      </center>

      <br></br>
      <br></br>

      <div className="container">
        {allMaterial.map((setAllMaterial, key) => (
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-2">
                <div className="room-img">
                  <div className="box14">
                    <img
                      src={`/uploads/Materials/${setAllMaterial.materialImage}`}
                      alt="..."
                    />
                    <br></br>
                    <div className="box-content">
                      <h3 className="title">{setAllMaterial.materialName}</h3>

                      <ul className="icon">
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal-id">
                            <i className="fa fa-link"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div classv="room-des">
                  <h3>
                    <a href="#" data-toggle="modal" data-target="#modal-id">
                      Material : {setAllMaterial.materialName}
                    </a>
                  </h3>
                  <br></br>
                  <ul className="room-size">
                    <li>
                      <i className="fa fa-arrow-right"></i>
                      <b>Available Quantity : {setAllMaterial.quantity}</b>
                    </li>

                    <li>
                      <i className="fa fa-arrow-right"></i>
                      <b>Email : {setAllMaterial.supEmail} </b>
                    </li>
                    <li>
                      <i className="fa fa-arrow-right"></i>
                      <b>Company : {setAllMaterial.supCompany} </b>
                    </li>

                    <li>
                      <i className="fa fa-arrow-right"></i>
                      <b>Unit Price : {setAllMaterial.unitPrice}</b>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="room-rate" color="red">
                  <h3>Contact Here</h3>

                  <br></br>

                  <button className="btn btn-primary">
                    <b>Contact now : {setAllMaterial.supContact}</b>
                    <Link to="{setAllMaterial.supContact}"></Link>
                  </button>

                  <br></br>
                </div>
              </div>

              <hr></hr>
              <br></br>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
