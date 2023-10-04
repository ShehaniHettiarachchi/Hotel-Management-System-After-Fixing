import React, { useState } from "react";
import axios from "axios";

export default function CreateItem() {
  const [name, setName] = useState("");
  const [description, setDesciption] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newItem = {
      name,
      description,
      qty,
      price,
    };

    axios
      .post("http://localhost:8070/item/add", newItem)
      .then(() => {
        alert("Item added successfully");

        setName("");
        setDesciption("");
        setQty("");
        setPrice("");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="container">
      <br />
      <button className="btn btn-secondary">
        <a href="/item" style={{ textDecoration: "none", color: "white" }}>
          Inventory Dashboard
        </a>
      </button>
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create New Item</h1>
        <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={sendData}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Item</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter Description"
              onChange={(e) => {
                setDesciption(e.target.value);
              }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Qty</label>
            <input
              type="text"
              className="form-control"
              id="qty"
              placeholder="Enter Qty"
              onChange={(e) => {
                setQty(e.target.value);
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Enter Price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}>
            <i className="fa fa-check-square"></i>
            &nbsp; Save &nbsp;
          </button>
        </form>
      </div>
    </div>
  );
}
