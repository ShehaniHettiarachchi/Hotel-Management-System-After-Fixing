import React, { useState, useEffect } from "react";

import axios, { Axios } from "axios";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AllResource() {
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
      .then((res) => alert("Resource Deleted"));

    setResource(resources.filter((elem) => elem.id !== id));
  };

  return (
    <div className="container">
      <center>
        <h1>All Resource</h1>
      </center>

      <br></br>

      <div className="container">
        <table className="table text-center">
          <thead className="thead-light">
            <tr>
              <th>Resource Name</th>
              <th>Resource type</th>
              <th>Resource Number</th>
              <th>Resource Price</th>
              <th>Capacity</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {resources.map((setResource, key) => (
            <tbody>
              <tr>
                <td>{setResource.name}</td>
                <td>{setResource.rtype}</td>
                <td>{setResource.Rnumber}</td>
                <td>{setResource.Price}</td>
                <td>{setResource.capacity}</td>

                <td>
                  <Link
                    to={`/updateres/${setResource._id}`}
                    className="btn btn-warning">
                    Update
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => deleteResource(setResource._id)}
                    className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <center>
      <Link
                      to={`/resdash`}
                      className="btn btn-primary">
                      Back to Dashboard
                    </Link>
<br></br>
<br></br>
                    <Link
                      to={`/disres`}
                      className="btn btn-primary">
                      Customer View
                    </Link>
                    </center>
      </div>
    </div>
  );
}
