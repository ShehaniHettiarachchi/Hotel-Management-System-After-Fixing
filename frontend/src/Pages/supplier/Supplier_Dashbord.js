import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function Supplier_Dashbord() {
  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">Supplier DashBoard</h1>
      </div>

      <div className="row">
        <div className="col-md-12">
          <br></br>
          <div className="container">
            <div className="card-deck">
              <div className="card shadow">
                <img
                  src="../images/pending.jpg"
                  className="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>
                  <a
                    href="StudentLogin.jsp"
                    className="btn btn-primary btn-lg btn-block text-center">
                    Pendding
                  </a>
                </div>
              </div>

              <div className="card shadow">
                <img
                  src="../images/order.jpg"
                  className="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>
                  <a
                    href="StudentLogin.jsp"
                    className="btn btn-primary btn-lg btn-block text-center">
                    My Order
                  </a>
                </div>
              </div>

              <div className="card shadow">
                <img
                  src="../images/c_invoice.jpg"
                  className="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>

                  <a>
                    <Link
                      to="/vmaterial"
                      className="btn btn-primary btn-lg btn-block text-center">
                      Material
                    </Link>
                  </a>
                </div>
              </div>

              <div className="card shadow">
                <img
                  src="../images/p_invoice.jpg"
                  className="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div className="card-body">
                  <br></br>

                  <a>

                   
                     

                      <Link to = "/mymaterial"
                    className="btn btn-primary btn-lg btn-block text-center">

                      View Material
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
