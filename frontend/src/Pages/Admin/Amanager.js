import React from "react";
import { Link } from "react-router-dom";

export default function Amanager() {
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="card-deck">
          <div className="card shadow">
            <img
              src="../images/customer.jpg"
              className="card-img-top"
              width="100px"
              height="400px"></img>
            <div className="card-body">
              <h4 className="card-title text-center">Add Now..</h4>
              <p className="card-text text-center">Add New Manager</p>
              <Link
                to="/addm"
                className="btn btn-primary btn-lg btn-block text-center">
                Click Here
              </Link>
            </div>
          </div>

          <div className="card shadow">
            <img
              src="../images/Supplier.jpg"
              className="card-img-top"
              width="100px"
              height="400px"></img>
            <div className="card-body">
              <h4 className="card-title text-center">View Managers</h4>
              <p className="card-text text-center">Update And Delete Manager Details</p>
              <Link
                to="/viewm"
                className="btn btn-primary btn-lg btn-block text-center">
                Click Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
