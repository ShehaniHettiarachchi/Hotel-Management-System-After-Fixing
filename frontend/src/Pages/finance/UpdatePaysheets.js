import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePaysheet = () => {
  const [empid, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empDesignation, setDesignation] = useState("");
  const [payDate, setPayDate] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccNum, setBankAccNum] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const changeOnClick = (e) => {
    e.preventDefault();

    const Paysheets = {
      empid,
      empName,
      empDesignation,
      payDate,
      bankName,
      bankAccNum,
      amount,
    };

    axios
      .put(`http://localhost:8070/paysheets/update/${id}`, Paysheets)
      .then((res) => {

        alert("Paysheet Updated");
        window.location.href = "/viewpaysheet";

        console.log(res.data);
        navigate("/viewpaysheet");

      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8070/paysheets/get/${id}`)
      .then((res) => [
        setEmpId(res.data.paysheet.empid),

        setEmpId(res.data.paysheet.empid),
        setEmpName(res.data.paysheet.empName),
        setDesignation(res.data.paysheet.empDesignation),
        setPayDate(res.data.paysheet.payDate),
        setBankName(res.data.paysheet.bankName),
        setBankAccNum(res.data.paysheet.bankAccNum),
        setAmount(res.data.paysheet.amount),
      ])

      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Paysheet Update Page</h1>
        </div>
      </div>

      <br></br>

      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3 was-validated" onSubmit={changeOnClick}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Empolyee ID
                </label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  value={empid}
                  id="name"
                  placeholder="Empolyee ID"
                  onChange={(e) => {
                    setEmpId(e.target.value);
                  }}
                  pattern="EMP\d{5}"
                  required
                  >
                  </input>
                  <div className="invalid-feedback">
                  Please enter a valid employee ID. ID should be in the format of	"EMP12345"
                 </div>
      
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Empolyee Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={empName}
                  id="email"
                  placeholder="Empolyee Name"
                  onChange={(e) => {
                    setEmpName(e.target.value);
                  }}
                  pattern="[a-zA-Z ]*"
                  required
                  ></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Empolyee Designation
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={empDesignation}
                  id="phone"
                  placeholder="Empolyee Designation"
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                  pattern="[a-zA-Z]*"
                  required
                  ></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={payDate}
                  id="address"
                  placeholder="Date"
                  onChange={(e) => {
                    setPayDate(e.target.value);
                  }}
          
                  ></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Bank Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={bankName}
                  id="NIC"
                  placeholder="Bank Name"
                  onChange={(e) => {
                    setBankName(e.target.value);
                  }}
                  pattern="[a-zA-Z ]*"
                  required
                  ></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Bank Account Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={bankAccNum}
                  id="DOB"
                  placeholder="Bank Account Number"
                  onChange={(e) => {
                    setBankAccNum(e.target.value);
                  }}
                  required
                  ></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={amount}
                  id="password"
                  placeholder="Amount"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  required
                  ></input>
              </div>

              <button type="submit" className="btn btn-primary">
                Update & Save
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <img
            src="../images/Salary.jpg"
            height="620px"
            width="100%"
            className="ml-4"></img>
        </div>
        <div className="col-lg-1 col-0"></div>
      </div>
    </div>
  );
};

export default UpdatePaysheet;
