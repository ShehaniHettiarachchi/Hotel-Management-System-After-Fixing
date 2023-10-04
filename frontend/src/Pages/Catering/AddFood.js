import React, { useState } from "react";
import axios from "axios";

export default function AddFood() {
  const [name, setName] = useState("");
  const [foodid, setFId] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newFood = {
      name,
      foodid,
      description,
      price,
    };
    axios
      .post("http://localhost:8070/foods/add", newFood)
      .then(() => {
        alert("Food Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <br />

      <h1 className="text-center">Add Food Items</h1>

      <form onSubmit={sendData}>
        <div className="form-group">
          <label for="name">Food Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter food name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="ID">Food ID</label>
          <input
            type="number"
            className="form-control"
            id="id"
            placeholder="Enter food ID"
            onChange={(e) => {
              setFId(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="description">Food Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter food description "
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="price">Food Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter food price "
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Menu
        </button>
      </form>
    </div>
  );
}
