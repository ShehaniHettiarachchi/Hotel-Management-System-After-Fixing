import React, { useState, useEffect } from "react";

import axios, { Axios } from "axios";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ViewItems() {
  const [Items, setItems] = useState([]);


  useEffect(() => {
    axios
      .get("http://Localhost:8070/foods/")
      .then((res) => setItems(res.data))
      .catch((error) => console.log(error));
  });

  const deleteItems = (id) => {
    axios
      .delete(`http://Localhost:8070/foods/delete/${id}`)
      .then((res) => alert("Food Deleted"));

    setItems(Items.filter((elem) => elem.id !== id));
  };

  return (
    <div>
      <br></br>
      <div className="row">
        <br />
        <h1 className="text-center">Food Items Dashboard</h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <table className="table text-center">
            <thead className="thead-light">
              <th>Food Name</th>
              <th>Food ID</th>
              <th>Food Description</th>
              <th>Food Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>

            {Items.map((setItems, key) => (
              <tbody>
                <tr>
                  <td>{setItems.name}</td>
                  <td>{setItems.foodid}</td>
                  <td>{setItems.description}</td>
                  <td>{setItems.price}</td>
                  <td>
                    <Link
                      to={`/updatefood/${setItems._id}`}
                      className="btn btn-warning">
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteItems(setItems._id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <br />
          <button className="btn btn-success">
            <a
              href="/addfood"
              style={{ textDecoration: "none", color: "white" }}>
              Create New Food
            </a>
          </button>{" "}
           
          <button className="btn btn-secondary">
            <a
              href="/foodreport"
              style={{ textDecoration: "none", color: "white" }}>
              Generate Food Menu
            </a>
          </button>
          <br />
        </div>

        <br></br>
        <div className="row">
          <br />
          <h1 className="text-center">Food Items Dashboard</h1>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-10">
            <table className="table text-center">
              <thead className="thead-light">
                <th>Food Name</th>
                <th>Food ID</th>
                <th>Food Description</th>
                <th>Food Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>

              {Items.map((setItems, key) => (
                <tbody>
                  <tr>
                    <td>{setItems.name}</td>
                    <td>{setItems.foodid}</td>
                    <td>{setItems.description}</td>
                    <td>{setItems.price}</td>
                    <td>
                      <Link
                        to={`/updatefood/${setItems._id}`}
                        className="btn btn-warning">
                        Update
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteItems(setItems._id)}
                        className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <br />
            <button className="btn btn-success">
              <a
                href="/addfood"
                style={{ textDecoration: "none", color: "white" }}>
                Create New Food
              </a>
            </button>{" "}
             
            <br />
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-1"></div>

            <div className="col-md-10">
              <table className="table text-center">
                <thead class="thead-light">
                  <th>Food Name</th>
                  <th>Food ID</th>
                  <th>Food Description</th>
                  <th>Food Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </thead>

                {Items.map((setItems, key) => (
                  <tbody>
                    <tr>
                      <td>{setItems.name}</td>
                      <td>{setItems.foodid}</td>
                      <td>{setItems.description}</td>
                      <td>{setItems.price}</td>
                      <td>
                        <Link
                          to={`/updatefood/${setItems._id}`}
                          className="btn btn-warning">
                          Update
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteItems(setItems._id)}
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
      </div>
    </div>
  
  );
}
