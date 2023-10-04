import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function UpdateSupplierProfile() {

  const [Supplier, setSupplier] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comName, setComName] = useState("");
  const [comAddress, setComAddress] = useState("");
  const [materialType, setMaterialType] = useState("");
  const navigate = useNavigate();
  
    const changeOnClick = (e) => {
      e.preventDefault();
  
      const Supplier = {
        name,
        email,
        phone,
        comName,
        comAddress,
        materialType,    
      };
  
      setName("");
      setEmail("");
      setPhone("");
      setComName("");
      setComAddress("");
      setMaterialType("");
      
  
      axios
        .put(`http://localhost:8070/suppliers/update/${localStorage.getItem("uID")}`, Supplier)
        .then((res) => {
          console.log(res.data);
          navigate("/sprofile");
        })
        .catch((err) => {
          console.log(err);
        });
    };


    useEffect(() => {
        axios
    
          .get(`http://localhost:8070/suppliers/get/${localStorage.getItem("uID")}`)
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
      <br></br>
      <div className="row">
        <div className="col-lg-12 ml-12">
          <h1 className="text-center">My Profile</h1>
        </div>
      </div>
      <br></br>

      <div className="row">
        <div className="col-lg-5 ml-12"></div>
        <div className="col-lg-5 ml-12">
          <img
            src="../images/profile.jpg"
            className="rounded-circle"
            height="200px"
            width="200px"></img>
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="row">
        <div className="col-lg-3 col-2 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={changeOnClick}>
              <div className="form-group">
                <label>Suppliier Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  name="Name"
                  placeholder="Name"
                  onChange={(e)=> {
                      setName(e.target.value);
                  }}                 
                />
              </div>

              <div className="form-group">
                <label>Supplier Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  value={email}
                  placeholder="Email"
                  onChange={(e)=>{
                      setEmail(e.target.value);
                  }}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="Contact Number"
                  value={phone}
                  placeholder="Contact Number"
                  onChange={(e)=>{
                      setPhone(e.target.value);
                  }}
                
                />
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Company Name"
                  value={comName}
                  placeholder="Company Name"
                  onChange={(e)=>{
                      setComName(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Company Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="text"
                  value={comAddress}
                  placeholder="Company Address"
                  onChange={(e)=>{
                    setComAddress(e.target.value);
                }}
                />
              </div>

              <div className="form-group">
                <label>Material Type</label>
                <input
                  type="text "
                  className="form-control"
                  name="Material Type"
                  value={materialType}
                  placeholder="Material Type"
                  onChange={(e)=>{
                    setMaterialType(e.target.value);
                }}
                  
                />
              </div>

              <br></br>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block text-center mb-2">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}