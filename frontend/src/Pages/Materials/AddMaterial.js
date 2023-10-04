import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddMaterial() {
  const [materialName, setMaterialName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supEmail, setSupEmail] = useState("");
  const [supContact, setSupContact] = useState("");
  const [supCompany, setSupCompany] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [materialImage, setMaterailImage] = useState("");

  const [supplier, setSupplier] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comName, setComName] = useState("");
  const [comAddress, setComAddress] = useState("");
  const [materialType, setMaterialType] = useState("");

  const navigate = useNavigate();



  const onChangeFile = (e) => {
    setMaterailImage(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("materialName", materialName);
    formData.append("quantity", quantity);
    formData.append("supEmail", supEmail);
    formData.append("supContact", supContact);
    formData.append("supCompany", supCompany);
    formData.append("unitPrice", unitPrice);
    formData.append("materialImage", materialImage);

    axios
      .post("http://localhost:8070/material/add", formData)
      .then(() => {
        alert("Materials Added Successfully");

        setMaterialName("");
        setQuantity("");
        setSupEmail("");
        setSupContact("");
        setSupCompany("");
        setUnitPrice("");
        setMaterailImage("");
        navigate("/vmaterial");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    const id = localStorage.getItem("uID");

    axios
      .get(`http://Localhost:8070/suppliers/get/${id}`, supplier)
      .then((res) => [
        
        setName(res.data.Supplier.name),
        setEmail(res.data.Supplier.email),
        setPhone(res.data.Supplier.phone),
        setComName(res.data.Supplier.comName),
        setComAddress(res.data.Supplier.comAddress),
        setMaterialType(res.data.Supplier.materialType),
      ])
      .catch((error) => console.log(error));
  }, []);



  return (
    <div>
      <div className="row">
        <div className="col-lg-4 ml-5">
          <br></br>
          <h1 className="text-center">Material Page</h1>
        </div>
      </div>

      <br></br>

      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form
              className="mt-3 ml-3 mr-3 mb-3"
              onSubmit={changeOnClick}
              encType="multipart/form-data">
              <div className="form-group">
                <label>Material Name</label>
                <input
                  type="text"
                  className="form-control"
                  name=" Material Name"
                  placeholder="Enter Material Name"
                  onChange={(e) => setMaterialName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="Number"
                  className="form-control"
                  name="Quantity"
                  placeholder="Enter Quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Supplier Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  placeholder="Enter Supplier Email"
                  onChange={(e) => setSupEmail(e.target.value)}
                  value={email}
                  readOnly
                  />
              </div>
              <div className="form-group">
                <label>Supplier Contact Number</label>
                <input
                  type="Number"
                  className="form-control"
                  name="Email"
                  placeholder="Enter Supplier Contact Number"
                  onChange={(e) => setSupContact(e.target.value)}
                  value={phone}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Supplier Company</label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  placeholder="Enter Supplier Company"
                  onChange={(e) => setSupCompany(e.target.value)}
                  value={comName}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Unit Price</label>
                <input
                  type="Number"
                  className="form-control"
                  name="Price"
                  placeholder="Enter Unit Price"
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
              </div>

              <div className="form-group">
                <div className="mb-3">
                  <label for="formFile" className="form-label">
                    Upload Material Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    filename="materialImage"
                    onChange={onChangeFile}></input>
                </div>
              </div>

              <br></br>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block text-center mb-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <img
            src="../images/Material.jpg"
            height="600px"
            width="100%"
            className="ml-4"></img>
        </div>

        <div className="col-lg-1 col-0"></div>
      </div>
      <br></br>
    </div>
  );
}
