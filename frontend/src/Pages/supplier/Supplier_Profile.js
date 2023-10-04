import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Supplier_Profile() {
  const [supplier, setSupplier] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comName, setComName] = useState("");
  const [comAddress, setComAddress] = useState("");
  const [materialType, setMaterialType] = useState("");

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
            <form className="mt-3 ml-3 mr-3 mb-3">
              <div className="form-group">
                <label>Suppliier Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="Name"
                  value={name}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Supplier Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  placeholder="Email"
                  value={email}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="Contact Number"
                  placeholder="Contact Number"
                  value={phone}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Company Name"
                  placeholder="Company Name"
                  value={comName}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Company Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Company Address"
                  value={comAddress}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Material Type</label>
                <input
                  type="text "
                  className="form-control"
                  name="Material Type"
                  placeholder="Material Type"
                  value={materialType}
                  readOnly
                />
              </div>

              <br></br>
              <div className="text-center">
              <Link
                      to={`/uprofile/${localStorage.getItem("uID")}`}
                      className="btn btn-warning">
                      Update
                    </Link>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
