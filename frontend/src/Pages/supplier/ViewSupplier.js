import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";

const ViewSupplier = () => {
  const [allSupplier, setAllSupplier] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/suppliers/")
      .then((res) => setAllSupplier(res.data))
      .catch((error) => console.log(error));
  });

  const deleteSupplier = (id) => {
    axios
      .delete(`http://localhost:8070/suppliers/delete/${id}`)
      .then((res) => alert("Supplier Deleted"));

    setAllSupplier(allSupplier.filter((elem) => elem.id !== id));
  };

  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">All Supplier Details</h1>
      </div>

      <div className="row">
        <div className="col-lg-9 col-0"></div>
        <div className="col-lg-3 col-0">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <table className="table text-center">
            <thead className="thead-light">
              <th>Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Company Name</th>
              <th>Company Address</th>
              <th>Material Type</th>
              <th>Action</th>
            </thead>

            {allSupplier.map((supplier, key) => (
              <tbody>
                <tr>
                  <td>{supplier.name}</td>
                  <td>{supplier.email}</td>
                  <td>{supplier.phone}</td>
                  <td>{supplier.comName}</td>
                  <td>{supplier.comAddress}</td>
                  <td>{supplier.materialType}</td>
                  <td>
                    <button
                      onClick={() => deleteSupplier(supplier._id)}
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

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <button
            className="btn btn-primary mb-2"
            onClick={() => {
              window.location.href = "/supplierreport";
            }}>
            Generate Supplier Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewSupplier;
