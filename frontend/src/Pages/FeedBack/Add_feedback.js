import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Add_feedback() {
  const [cusEmail, setcusEmail] = useState("");
  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newFeedback = {
      cusEmail,
      message,
    };

    axios
      .post("http://localhost:8070/feedback/add", newFeedback)
      .then(() => {
        alert("Feedback Added");

        setcusEmail(" ");
        setmessage("");
        navigate("/viewfeedback");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <br></br>
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-center"> We value your Feedback.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 ml-0">
          <div className="border mt-5 ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={sendData}>
              <div className="form-group">
                <label> Customer Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="Customer Email"
                  placeholder="Customer Email"
                  onChange={(e) => {
                    setcusEmail(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Feedback</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  placeholder="Feedback"
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}></textarea>
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

        <div className="col-lg-7">
          <img
            src="../images/feedback.jpg"
            height="500px"
            width="100%"
            className="ml-0"></img>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 ml-0"></div>

        <div className="col-lg-4 ml-0">
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block text-center mb-2">
            View Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
