import React from "react";
import { Link } from "react-router-dom";

export default function Login_Page() {
  return (
    <div>
      <br />
      <div className="container">
        <diV className="card-deck">
          <div className="card shadow">
            <img
              src="../images/log_customer.jpg"
              className="card-img-top"
              width="100px"
              height="400px"></img>
            <div className="card-body">
              <h4 className="card-title text-center">Customer</h4>
              <p className="card-text text-center">Login as a Customer</p>
              <Link
                to="/cLogin"
                className="btn btn-success btn-lg btn-block text-center">
                Login as a Customer
              </Link>
            </div>
          </div>

          <div className="card shadow">
            <img
              src="../images/log_suplier.jpg"
              className="card-img-top"
              width="100px"
              height="400px"></img>
            <div className="card-body">
              <h4 className="card-title text-center">Supplier</h4>
              <p className="card-text text-center">Login as a Supplier</p>
              <Link
                to="/sLogin"
                className="btn btn-success btn-lg btn-block text-center">
                Login as a Supplier
              </Link>
            </div>
          </div>
        </diV>
      </div>
    </div>
  );
}
