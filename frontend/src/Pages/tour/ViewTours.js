import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewTours = () => {
  const [allTours, setAllTours] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/tour/")
      .then((res) => setAllTours(res.data))
      .catch((error) => console.log(error));
  });

  const deleteTour = (id) => {
    axios
      .delete(`http://localhost:8070/tour/delete/${id}`)
      .then((res) => alert("Tour Deleted"));

    setAllTours(allTours.filter((elem) => elem.id !== id));
  };

  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">All Tours</h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <table className="table text-center">
            <thead className="thead-light">
              <th>Package Name</th>
              <th>Package Type</th>
              <th>Visiting Places</th>
              <th>Duration</th>
              <th>Vehicle Type</th>
              <th>Maximum Passengers</th>
              <th>Package Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>

            {allTours.map((setAllTours, key) => (
              <tbody>
                <tr>
                  <td>{setAllTours.name}</td>
                  <td>{setAllTours.package_type}</td>
                  <td>{setAllTours.visiting_places}</td>
                  <td>{setAllTours.duration}</td>
                  <td>{setAllTours.vehicle_type}</td>
                  <td>{setAllTours.maximum_passengers}</td>
                  <td>{setAllTours.package_price}</td>
                  <td>
                    <Link
                      to={`/updatetour/${setAllTours._id}`}
                      className="btn btn-warning">
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteTour(setAllTours._id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default ViewTours;
