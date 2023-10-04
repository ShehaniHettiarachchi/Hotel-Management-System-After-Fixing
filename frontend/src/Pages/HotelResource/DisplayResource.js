import React, { useState, useEffect } from "react";

import axios, { Axios } from "axios";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";
import DOMPurify from 'dompurify';

export default function DisplayResource() {
  const [resources, setResource] = useState([]);

  useEffect(() => {
    function getResource() {
      axios
        .get("http://Localhost:8070/resmanger/")
        .then((res) => {
          console.log(res.data);
          setResource(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getResource();
  }, []);

  const deleteResource = (id) => {
    axios
      .delete(`http://Localhost:8070/resmanger/delete/${id}`)
      .then((res) => alert("User Deleted"));

    setResource(resources.filter((elem) => elem.id !== id));
  };

  return (
    <div className="container">
      <center>
        <h1>All Resource</h1>
      </center>

      <br></br>

      <div className="container">
        {resources.map((setResource, key) => (
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <div className="room-img">
                  <div className="box12">
                    <img
                      src={DOMPurify.sanitize(`/uploads/HotelResource/${setResource.ResourceImage}`)}
                      alt="..."
                    />
                    <br></br>
                    <div className="box-content">
                      <h3 className="title">{setResource.name}</h3>

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
                      {setResource.name}
                    </a>
                  </h3>
                  <p>
                    <b>{setResource.Description}</b>
                  </p>
                  <ul className="room-size">
                    <li>
                      <i className="fa fa-arrow-right"></i>
                      <b>{setResource.rtype} </b>
                    </li>
                    <li>
                      <i className="fa fa-arrow-right"></i>
                      <b>capacity : {setResource.capacity}</b>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="room-rate" color="red">
                  <h3>From</h3>

                  <h1>RS.{setResource.Price}</h1>
                  <br></br>

                  <button color="white" className="btn btn-success">
                    <Link to={`/addb/${setResource._id}`}>Book Now</Link>
                  </button>
                  <></>
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
