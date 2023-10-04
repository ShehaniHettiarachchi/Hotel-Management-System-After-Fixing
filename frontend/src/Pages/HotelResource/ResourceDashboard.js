import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">Resource Dashboard</h1>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <br></br>
          <div className="container">
            <div className="card-deck">
              <div className="card shadow">
                <img
                  src="../images/hoteld1.jpg"
                  className="card-img-top"
                  width="200px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>
                  <Link
                    to="/addres"
                    className="btn btn-primary btn-lg btn-block text-center">
                    Resource add here
                  </Link>
                </div>
              </div>

              <div className="card shadow">
                <img
                  src="../images/hoteld2.jpg"
                  className="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>
                  <Link
                    to="/viewres"
                    className="btn btn-primary btn-lg btn-block text-center">
                    View All Resource
                  </Link>
                </div>
              </div>

              <div className="card shadow">
                <img
                  src="../images/hoteld3.jpg"
                  className="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>
                  <Link
                    to="/viewpac"
                    className="btn btn-primary btn-lg btn-block text-center">
                    Manage Package 
                  </Link>
                </div>
              </div>

            

              
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
