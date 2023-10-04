import React from "react";
import { Link } from "react-router-dom";

export default function RegisterDashboard() {
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
              <h4 className="card-title text-center">Customer</h4>
              <p className="card-text text-center">Sign Up as a Customer</p>
              <Link
                to="/customerSignup"
                className="btn btn-primary btn-lg btn-block text-center">
                SignUp
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
              <h4 className="card-title text-center">Supplier</h4>
              <p className="card-text text-center">Sign Up as a Supplier</p>
              <Link
                to="/supplierSignup"
                className="btn btn-primary btn-lg btn-block text-center">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
