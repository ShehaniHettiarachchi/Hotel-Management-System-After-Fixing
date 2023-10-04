import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

export default function AddSalary() {
  const [empid, setEmpid] = useState("");
  const [empName, setEmpName] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");
  const [payDate, setPayDate] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccNum, setBankAccNum] = useState("");
  const [amount, setAmount] = useState("");

  // declare a state variable for the modal
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccssOpen, setIsSuccssOpen] = useState(false);

  //This function is used to show the modal
  const showModal = () => {
    setIsOpen(true);
  };
  const showSuccssModal = () => {
    setIsSuccssOpen(true);
  };

  //This function is used to hide the modal
  const hideModal = () => {
    setIsOpen(false);
  };
  const hideSuccssModal = () => {
    setIsSuccssOpen(false);
  };

  //This function is used to handle the form submission
  function sendData(e) {
    e.preventDefault();
    hideModal();

    const newPaysheet = {
      empid,
      empName,
      empDesignation,
      payDate,
      bankName,
      bankAccNum,
      amount,
    };

    axios
      .post("http://Localhost:8070/paysheets/add", newPaysheet)
      .then(() => {
        showSuccssModal();
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <br></br>
      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Salary Details Adding Page</h1>
        </div>
      </div>
      
      <br></br>

      {/* Model Start */}
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Are you sure you want to add this paysheet?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Double check the details before adding.</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={hideModal}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={sendData}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
      {/* Modal End */}

      {/* Model Start */}
      <Modal show={isSuccssOpen} onHide={hideSuccssModal}>
        <Modal.Header>
          <Modal.Title>Paysheet Added Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button
            className="btn btn-danger"
            onClick={() => {
              window.location.reload();
            }}>
            OK
          </button>

          <button className="btn btn-danger" onClick={
            () => {
              //redirect to the view page
              window.location.href = "/viewpaysheet";
            }
          }>OK</button>

        </Modal.Footer>
      </Modal>
      {/* Modal End */}

      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form
              className="mt-3 ml-3 mr-3 mb-3 was-validated"
              onSubmit={sendData}>
              <div className="form-group">
                <label> Empolyee ID</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  name="fullname"
                  placeholder="Empolyee ID"
                  onChange={(e) => {
                    setEmpid(e.target.value);
                  }}
                  pattern="EMP\d{5}"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid employee ID. ID should be in the format
                  of "EMP12345"
                </div>
              </div>

              <div className="form-group">
                <label>Empolyee Name</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  name="Empolyee Name"
                  placeholder="Empolyee Name"
                  onChange={(e) => {
                    setEmpName(e.target.value);
                  }}
                  pattern="[a-zA-Z ]*"
                  required
                />
              </div>

              <div className="form-group">
                <label>Empolyee Designation</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  name="Empolyee Designation"
                  placeholder="Empolyee Designation"
                  onChange={(e) => {
                    setEmpDesignation(e.target.value);
                  }}
                  pattern="[a-zA-Z]*"
                  required
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="Date"
                  className="form-control is-invalid"
                  name="email"
                  placeholder="Date"
                  onChange={(e) => {
                    setPayDate(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label>Bank Name </label>
                <input
                  type="text "
                  className="form-control is-invalid"
                  name="bankName"
                  placeholder="Bank Name"
                  onChange={(e) => {
                    setBankName(e.target.value);
                  }}
                  pattern="[a-zA-Z ]*"
                  required
                />
              </div>

              <div className="form-group">
                <label>Bank Account Number</label>
                <input
                  type="number"
                  className="form-control is-invalid"
                  name="email"
                  placeholder="Bank Account Number"
                  onChange={(e) => {
                    setBankAccNum(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label>Amount</label>
                <input
                  type="number"
                  className="form-control is-invalid"
                  name="email"
                  placeholder="Amount"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  required
                />
              </div>

              <br></br>
              <div className="text-center">
                <button
                  type="button"
                  onClick={showModal}
                  className="btn btn-success btn-lg btn-block text-center mb-2">
                  Submit
                </button>
              </div>
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
}
