import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EditItem = () => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const changeOnClick = (e) => {
    e.preventDefault();

    const Item = {
      name,
      qty,
      description,
      price,
    };

    setName("");
    setQty("");
    setDescription("");
    setPrice("");

    axios
      .put(`http://localhost:8070/item/update/${id}`, Item)
      .then((res) => {
        console.log(res.data);
        navigate("/item");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8070/item/get/${id}`)
      .then((res) => [
        setName(res.data.item.name),
        setQty(res.data.item.qty),
        setDescription(res.data.item.description),
        setPrice(res.data.item.price),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <br />
      <button className="btn btn-secondary">
        <a href="/item" style={{ textDecoration: "none", color: "white" }}>
          Inventory Dashboard
        </a>
      </button>

      <div className="row">
        <div className="col-lg-4 ml-5">
          <br />
          <h1 className="text-center">Edit Item Page</h1>
        </div>
      </div>

      <br></br>

      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={changeOnClick}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  id="name"
                  placeholder="Enter"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Qty
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={qty}
                  id="qty"
                  placeholder="Enter"
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  id="description"
                  placeholder="Enter"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={price}
                  id="price"
                  placeholder="Enter"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}></input>
              </div>

              <button type="submit" className="btn btn-primary">
                Update Item
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-1 col-0"></div>
      </div>
    </div>
  );
};

export default EditItem;
