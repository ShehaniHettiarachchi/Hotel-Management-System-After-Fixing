import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">Finance Dashboard</h1>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <br></br>
          <div className="container">
            <div className="card-deck">
              <div className="card shadow">
                <img
                  src="../images/Salalry_adding.jpg"
                  className="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>
                  <Link
                    to="/paysheet"
                    className="btn btn-primary btn-lg btn-block text-center">
                    Salary Add Here
                  </Link>
                </div>
              </div>

              <div className="card shadow">
                <img
                  src="../images/Salalry_adding_report.jpg"
                  className="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>
                  <Link
                    to="/viewpaysheet"
                    a
                    className="btn btn-primary btn-lg btn-block text-center">
                    Salary Details & Report
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
